import { Token } from './token';
import { Price } from '../price';
import { Item } from '../item';
import { LootGen } from '../lootgen';

export class Or implements Token {

    constructor(
        private tokens: Token[],
        private chances: number[]
    ) {}


    public gen(item: Item, masculine: boolean, plural: boolean, vowel: boolean, p: Price): string {
        // choose one at random
        return this.tokens[LootGen.randomIndexWithChancesArray(this.chances)].gen(item, masculine, plural, vowel, p);
    }

}
