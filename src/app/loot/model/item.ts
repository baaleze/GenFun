import { Price } from './price';

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

    public getStatString(statKey: string): string {
        const value = this.stats.get(statKey);
        if (statKey[statKey.length - 1] === '%') {
            return statKey.substring(0, statKey.length - 1).replace('_', ' ') + (value < 0 ? ' ' : ' +') + value + '%'
        } else {
            return `${statKey.replace('_', ' ')} ${value < 0 ? '' : '+'} ${value}`;
        }
    }
}
