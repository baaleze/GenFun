import { Item } from '../item';
import { Terminal } from './terminal';

export class Modifier extends Terminal {

    public static parse(s: string): Modifier {
        const split = s.split('\|', 2);
        if (split.length !== 2) {
            console.error(s + 'is not a valid Modifier');
        }
        return new Modifier(split[0], Number(split[1]));
    }

    constructor(
        public value: string,
        public factor: number
    ) {
        super();
    }

    public gen(item: Item, masculine: boolean, plural: boolean): string {
        return this.value;
    }

}
