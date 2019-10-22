import { Price } from './price';
import { LootGen } from './lootgen';

export class Item {

    static UNIQUE_THRESHOLD = 8;
    public name: string;
    public uniqueName: string;
    public stats: Map<string, number> = new Map<string, number>();
    public powers: string[] = [];
    public tags: string[] = [];
    public price: Price;

    constructor(
    ) {}

    public addStat(stat: string, value: number) {
        if (this.stats[stat]) {
            this.stats.set(stat, this.stats[stat] + value);
        } else {
            this.stats.set(stat, value);
        }
    }

    public addTag(tag: string) {
        if (tag !== undefined && tag.trim() !== '' && this.tags.indexOf(tag) === -1) {
            this.tags.push(tag);
        }
    }

    public addPower(power: string) {
        if (power !== undefined && power.trim() !== '' && this.powers.indexOf(power) === -1) {
            this.powers.push(power);
        }
    }
}
