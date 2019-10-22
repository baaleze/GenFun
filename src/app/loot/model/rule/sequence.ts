import { Token } from './token';
import { Price } from '../price';
import { Item } from '../item';

export class Sequence implements Token {

    constructor(private tokens: Token[]) {}

    public gen(item: Item, masculine: boolean, plural: boolean, vowel: boolean, p: Price): string {
        const sequence: string[] = [];
        this.tokens.forEach(t => {
            const price = new Price();
            sequence.push(t.gen(item, masculine, plural, vowel, price));
            p.addPrice(price);
        });
        return sequence.join(' ');
    }

}
