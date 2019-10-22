import { Item } from '../item';
import { Price } from '../price';

export abstract class Terminal {
    public tags: string[];
    public stats: Map<string, number>;
    public powers: string[];
    public price: Price;

    public init() {
        this.tags = [];
        this.stats = new Map<string, number>();
        this.powers = [];
    }

    public abstract gen(item: Item, masculine: boolean, plural: boolean): string;

    protected addStatsTagsAndPowers(item: Item, factor = 1): void {
        this.stats.forEach((value, key) =>
            item.addStat(key, value * factor)
        );
        this.powers.forEach(p => item.addPower(p));
        this.tags.forEach(t => item.addTag(t));
    }

}
