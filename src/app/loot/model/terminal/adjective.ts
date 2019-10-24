import { Terminal } from './terminal';
import { Item } from '../item';
import { Modifier } from './modifier';
import { LootGen } from '../lootgen';
import { TerminalType } from './terminaltype';
import { StringToken } from '../rule/stringtoken';
import { Price } from '../price';

export class Adjective extends Terminal {

    public static parse(s: string): Adjective {
        const split = s.split('\.', 9);
        if (split.length !== 9) {
            console.error(s + ' is not a valid Adjective');
        }

        const adj = new Adjective('B' === split[0], split[1], split[2], split[3], split[4], undefined);
        // stat
        adj.stats = new Map<string, number>();
        split[5].split('\|').forEach(stat => {
            if (stat.indexOf('=') !== -1) {
                const statSplit = stat.split('=');
                adj.stats.set(statSplit[0], Number(statSplit[1]));
            }
        });
        // tag
        adj.tags = split[6].split('\|');

        // power
        adj.powers = split[7].split('\|');

        // price
        adj.price = Price.parse(split[8], split[1]);

        return adj;
    }

    constructor(
        public goesBefore: boolean,
        public masculineSingular: string,
        public masculinePlural: string,
        public feminineSingular: string,
        public femininePlural: string,
        private mod: Modifier
    ) {
        super();
    }

    public gen(item: Item, masculine: boolean, plural: boolean): string {

        if (this.mod !== undefined) {
            this.addStatsTagsAndPowers(item, this.mod.factor);
            return this.mod.gen(item, masculine, plural) + ' '
                + this.get(masculine, plural);
        } else {
            this.addStatsTagsAndPowers(item);
            return this.get(masculine, plural);
        }
    }

    private get(masculine: boolean, plural: boolean): string {
        return masculine
            ? plural ? this.masculinePlural : this.masculineSingular
            : plural ? this.femininePlural : this.feminineSingular;
    }

    public beginsWithVowel(): boolean {
        if (Math.random() < 0.3) {
            this.mod = LootGen.generators.get(TerminalType.Modifier).gen();
            return StringToken.vowels.indexOf(this.mod.value.substring(0, 1)) !== -1;
        } else {
            this.mod = undefined;
            return StringToken.vowels.indexOf(this.masculinePlural.substring(0, 1)) !== -1;
        }
    }

}
