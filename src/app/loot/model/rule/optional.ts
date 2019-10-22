import { Token } from './token';
import { Price } from '../price';
import { Item } from '../item';

export class Optional implements Token {

    constructor(
        private token: Token,
        private chance: number
    ) {}

    public gen(item: Item, masculine: boolean, plural: boolean, vowel: boolean, p: Price): string {
        if (Math.random() < (this.chance / 100.0)) {
            const price = new Price();
            p.addPrice(price);
            return this.token.gen(item, masculine, plural, vowel, price);

        } else {
            return '';
        }
    }

}
