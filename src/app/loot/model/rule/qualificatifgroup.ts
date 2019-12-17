import { Token } from './token';
import { StringToken } from './stringtoken';
import { Price } from '../price';
import { Item } from '../item';
import { TerminalType } from '../terminal/terminaltype';
import { LootGen } from '../lootgen';
import { Adjective } from '../terminal/adjective';
import { Noun } from '../terminal/noun';

export class QualificatifGroup implements Token {

    private type: TerminalType;
    private nbAdj: number;
    private pref = new StringToken('de la', 'des', 'du', 'des', 'de l\'');

    public gen(item: Item, masculine: boolean, plural: boolean, vowel: boolean, p: Price): string {
        this.type = LootGen.random(0, 100) < 50 ? TerminalType.Gear : TerminalType.Noun;
        this.nbAdj = LootGen.randomBetween([0, 0, 0, 1, 1, 1, 2, 2]);
        return '\'' + this.getToken(item, masculine, plural, p).trim() + '\'';
    }

    protected getToken(item: Item, masculineParent: boolean, pluralParent: boolean, p: Price): string {
        // get noun
        const actualNoun = LootGen.generators.get(this.type).gen<Noun>();
        p.addPrice(actualNoun.price);

        // get gender and plurality
        const masculine = actualNoun.masculine;
        const plural = actualNoun.plural === '' ? false : Math.random() > 0.5;
        let vowel = StringToken.vowels.indexOf(actualNoun.get(plural).substring(0, 1)) !== -1;

        // generate strings
        const adjBef: Adjective[] = [];
        const adjAft: Adjective[] = [];
        let a: Adjective;
        for (let i = 0; i < this.nbAdj; i++) {
            a = LootGen.generators.get(TerminalType.Adjective).gen<Adjective>();
            if (a.goesBefore) {
                adjBef.push(a);
            } else {
                adjAft.push(a);
            }
            p.addPrice(a.price);
        }
        if (adjBef.length > 0) {
            vowel = adjBef[0].beginsWithVowel();
        }
        const qualif = LootGen.generators.get(TerminalType.Qualificatif).gen();
        const q = qualif.gen(item, masculineParent, pluralParent);
        p.addPrice(qualif.price);

        const n = actualNoun.gen(item, masculine, plural);

        const pref = this.pref !== undefined ? this.pref.gen(item, masculine, plural, vowel, p) : '';

        const adjAftStr = this.map(item, masculine, plural, adjAft).join(' ');
        const adjBefStr = this.map(item, masculine, plural, adjBef).join(' ');

        return [q, pref, adjBefStr, n, adjAftStr].join(' ');
    }

    private map(item: Item, masculine: boolean,  plural: boolean, adjAft: Adjective[]): string[] {
        return adjAft.map(a => a.gen(item, masculine, plural));
    }

}
