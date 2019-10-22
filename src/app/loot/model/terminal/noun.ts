import { Terminal } from './terminal';
import { Item } from '../item';
import { StringToken } from '../rule/stringtoken';
import { Price } from '../price';

export class Noun extends Terminal {

    public masculine: boolean;
    public singular: string;
    public plural: string;


    /**
     * Format is <code>[MF].singularform.pluralform.stat1=statvalue1|stat2=statvalue2.tag1|tag2|tag3.power 1|another power\n</code>
     */
    public static parse(s: string): Noun {
        const split = s.split('\.', 7);
        if (split.length !== 7) {
            console.error(s + ' is not a valid Noun');
        }
        const noun = new Noun();
        // gender
        noun.masculine = 'M' === split[0];
        // singular/plural
        noun.singular = split[1];
        noun.plural = split[2];
        // stat
        noun.stats = new Map<string, number>();
        split[3].split('\|').forEach(stat => {
            if (stat.indexOf('=') !== -1) {
                const statSplit = stat.split('=');
                noun.stats.set(statSplit[0], Number(statSplit[1]));
            }
        });
        // tag
        noun.tags = split[4].split('\|');

        // power
        noun.powers = split[5].split('\|');

        noun.price = Price.parse(split[6]);

        return noun;
    }

    public get(plural: boolean): string {
        return plural ? this.plural : this.singular;
    }

    public gen(item: Item, masculine: boolean, plural: boolean): string {
        this.addStatsTagsAndPowers(item);
        return this.get(plural);
    }


    public beginsWithVowel(): boolean {
        return StringToken.vowels.indexOf(this.plural.substring(0, 1)) !== -1;
    }

}
