import { Item } from '../item';
import { Terminal } from './terminal';
import { Price } from '../price';

export class Material extends Terminal {

    private material: string;


    public static parse(s: string): Material {
        const split = s.split('\.', 5);
        if (split.length !== 5) {
            console.error(s + ' is not a valid Material');
        }
        const mat = new Material();
        mat.material = split[0];
        // stat
        mat.stats = new Map<string, number>();
        split[1].split('\|').forEach(stat => {
            if (stat.indexOf('=') !== -1) {
                const statSplit = stat.split('=');
                mat.stats.set(statSplit[0], Number(statSplit[1]));
            }
        });
        // tag
        mat.tags = split[2].split('\|');

        // power
        mat.powers = split[3].split('\|');

        mat.price = Price.parse(split[4], split[0]);
        return mat;
    }

    public gen(item: Item, masculine: boolean, plural: boolean): string {
        this.addStatsTagsAndPowers(item);
        return this.material;
    }


}
