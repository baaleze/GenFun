import { Token } from './token';
import { StringToken } from './stringtoken';
import { Price } from '../price';
import { Item } from '../item';
import { LootGen } from '../lootgen';
import { TerminalType } from '../terminal/terminaltype';
import { Adjective } from '../terminal/adjective';
import { Noun } from '../terminal/noun';
import { Material } from '../terminal/material';
import { QualificatifGroup } from './qualificatifgroup';

export class NounGroup implements Token {

    constructor(
        public prefix: StringToken,
        public suffix: StringToken,
        public plural: boolean,
        public type: TerminalType,
        private qualifChance: number,
        private materialChance: number,
        public nbAdj = 0,
    ) {}

    public gen(item: Item, dontcare: boolean, osef: boolean, ahah: boolean, p: Price): string {
        this.nbAdj = LootGen.randomBetween([0, 0, 1, 1, 1, 2, 2, 3]);
        return this.getTokens(item, p).join(' ');
    }

    protected getTokens(item: Item, p: Price): string[] {
        // get noun
        const actualNoun = LootGen.generators.get(this.type).gen<Noun>();
        p.addPrice(actualNoun.price);

        // get gender and plurality
        const masculine = actualNoun.masculine;
        const plural = this.plural !== undefined ? this.plural : Math.random() > 0.5;
        let vowel = actualNoun.beginsWithVowel();

        // generate strings
        const adjBef: Adjective[] = [];
        const adjAft: Adjective[] = [];
        let a: Adjective;
        let i = this.nbAdj;
        while (i > 0) {
            a = LootGen.generators.get(TerminalType.Adjective).gen<Adjective>();
            // check if already present
            if (!adjAft.includes(a) && !adjBef.includes(a)) {
                if (a.goesBefore) {
                    adjBef.push(a);
                } else {
                    adjAft.push(a);
                }
                p.addPrice(a.price);
                i--;
            }// else ignore adj and generate another one
        }
        if (adjBef.length > 0) {
            vowel = adjBef[0].beginsWithVowel();
        }

        const n = actualNoun.gen(item, masculine, plural);

        const pref = this.prefix !== undefined ? this.prefix.gen(item, masculine, plural, vowel, p) : '';
        const suff = this.suffix !== undefined ? this.suffix.gen(item, masculine, plural, vowel, p) : '';

        const adjAftStr = this.map(item, masculine, plural, adjAft).join(' ');
        const adjBefStr = this.map(item, masculine, plural, adjBef).join(' ');

        const tokens = [pref, adjBefStr, n, adjAftStr, suff];


        // material
        if (LootGen.random(0, 100) < this.materialChance) {
            // add material
            const material = LootGen.generators.get(TerminalType.Material).gen<Material>();
            tokens.push(material.gen(item, masculine, plural));
            p.addPrice(material.price);
        }

        // qualificatif
        if (LootGen.random(0, 100) < this.qualifChance) {
            const price = new Price();
            tokens.push(new QualificatifGroup().gen(item, masculine, plural, vowel, price));
            p.addPrice(price);
        }

        return tokens;
    }

    private map(item: Item, masculine: boolean,  plural: boolean, adjAft: Adjective[]): string[] {
        return adjAft.map(a => a.gen(item, masculine, plural));
    }
}
