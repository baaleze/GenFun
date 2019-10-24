import { Terminal } from './terminal';
import { Item } from '../item';
import { Price } from '../price';

export class Qualificatif extends Terminal {

    public feminineSingular: string;
    public femininePlural: string;
    public masculineSingular: string;
    public mascuinePlural: string;

    public static parse(s: string): Qualificatif {
        const split = s.split('\.', 8);
        if (split.length !== 8) {
            console.error(s + ' is not a valid Qualificatif');
        }
        const qual = new Qualificatif();
        // singular/plural
        qual.masculineSingular = split[0];
        qual.mascuinePlural = split[1];
        qual.feminineSingular = split[2];
        qual.femininePlural = split[3];
        // stat
        qual.stats = new Map<string, number>();
        split[4].split('\|').forEach(stat => {
            if (stat.indexOf('=') !== -1) {
                const statSplit = stat.split('=');
                qual.stats.set(statSplit[0], Number(statSplit[1]));
            }
        });
        // tag
        qual.tags = split[5].split('\|');

        // power
        qual.powers = split[6].split('\|');

        qual.price = Price.parse(split[7], split[0]);
        return qual;
    }

    public gen(item: Item, masculine: boolean, plural: boolean) {
        this.addStatsTagsAndPowers(item);
        return ' ' + this.get(masculine, plural);
    }

    private get(masculine: boolean, plural: boolean) {
        return masculine
            ? plural ? this.mascuinePlural : this.masculineSingular
            : plural ? this.femininePlural : this.feminineSingular;
    }


}
