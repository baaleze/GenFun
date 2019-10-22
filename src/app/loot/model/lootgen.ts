import { Observable, forkJoin, of } from 'rxjs';
import { Item } from './item';
import { Token } from './rule/token';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Sequence } from './rule/sequence';
import { NounGroup } from './rule/noungroup';
import { StringToken } from './rule/stringtoken';
import { MarkovCharGenerator } from 'src/app/markov/markovgenerator';
import { Price } from './price';
import { Terminal } from './terminal/terminal';
import { TerminalGenerator } from './terminal/terminalgenerator';
import { Adjective } from './terminal/adjective';
import { TerminalType } from './terminal/terminaltype';
import { Modifier } from './terminal/modifier';
import { Material } from './terminal/material';
import { Optional } from './rule/optional';
import { Or } from './rule/or';
import { NumberedNounGroup } from './rule/numberednoungroup';
import { Gear } from './terminal/gear';
import { Noun } from './terminal/noun';
import { Qualificatif } from './terminal/qualificatif';

export class LootGen {

    static generators: Map<TerminalType, TerminalGenerator>;
    static instance: LootGen;

    start: Token;
    markov: MarkovCharGenerator;

    public static default(http: HttpClient): Observable<LootGen> {
        if (!LootGen.instance) {
            return forkJoin(
                LootGen.getAllLines('gear.txt', http),
                LootGen.getAllLines('nouns.txt', http),
                LootGen.getAllLines('adjectives.txt', http),
                LootGen.getAllLines('qualif.txt', http),
                LootGen.getAllLines('modifier.txt', http),
                LootGen.getAllLines('material.txt', http),
                LootGen.getAllLines('names.txt', http)
            ).pipe(
                map(([gear, noun, adj, qualif, mod, mat, name]) => new LootGen(gear, noun, adj, qualif, mod, mat, name))
            );
        } else {
            return of(LootGen.instance);
        }
    }

    public static getAllLines(fileName: string, http: HttpClient): Observable<string[]> {
        return http.get('/assets/' + fileName, {responseType: 'text'}).pipe(
            map(text => text.split('\n'))
        );
    }


    public static random(from: number, to: number): number {
        return Math.floor(Math.random() * (to - from + 1)) + from;
    }

    public static randomBetween(values: number[]): number {
        return values[Math.floor(Math.random() * values.length)];
    }

    public static randomIndexWithChancesArray(chances: number[]) {
        const percent = LootGen.random(0, 100);
        let cumul = 0;
        for (let i = 0; i < chances.length; i++) {
            cumul += chances[i];
            if (percent < cumul) {
                return i;
            }
        }
        return 0;
    }

    public constructor(
        gear: string[], noun: string[], adj: string[],
        qualif: string[], modifier: string[],
        material: string[], names: string[]) {
        LootGen.generators = new Map<TerminalType, TerminalGenerator>();
        LootGen.generators.set(TerminalType.Gear, new TerminalGenerator(gear, s => Gear.parse(s)));
        LootGen.generators.set(TerminalType.Noun, new TerminalGenerator(noun, s => Noun.parse(s)));
        LootGen.generators.set(TerminalType.Adjective, new TerminalGenerator(adj, s => Adjective.parse(s)));
        LootGen.generators.set(TerminalType.Qualificatif, new TerminalGenerator(qualif, s => Qualificatif.parse(s)));
        LootGen.generators.set(TerminalType.Modifier, new TerminalGenerator(modifier, s => Modifier.parse(s)));
        LootGen.generators.set(TerminalType.Material, new TerminalGenerator(material, s => Material.parse(s)));
        this.loadUniqueNames(names);
        this.defaultTree();
    }


    public defaultTree(): void {
        const nounGroup = new NounGroup(
            new StringToken('de la', 'des', 'du', 'des', 'de l\''),
            undefined, undefined, TerminalType.Noun,  0, 5);
        const numberNounGroup = new NumberedNounGroup(
            new StringToken('de la', 'des', 'du', 'des', 'de l\''),
            undefined, TerminalType.Noun, 0, 5);
        this.start = new Sequence([
            new NounGroup(undefined, undefined, false, TerminalType.Gear, 20, 20),
            new Optional(
                new Or([nounGroup, numberNounGroup], [70, 30]), 40)
            ]
        );
    }

    private loadUniqueNames(names: string[]): void {
        this.markov = new MarkovCharGenerator(3, '$', 12);
        this.markov.loadWords(names);
    }


    public generateUniqueName(): string {
        return this.markov.generateWord();
    }

    public gen(): Item {
        const item = new Item();
        const p = new Price();
        const res = this.start.gen(item, false, false, false, p).trim();
        item.name = res.substring(0, 1).toUpperCase() + res.substring(1);
        item.price = p;
        if (item.stats.size + item.powers.length + item.tags.length > Item.UNIQUE_THRESHOLD) {
            item.uniqueName = this.generateUniqueName();
        }
        return item;
    }

}
