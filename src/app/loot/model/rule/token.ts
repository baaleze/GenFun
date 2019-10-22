import { LootGen } from '../lootgen';
import { Item } from '../item';
import { Price } from '../price';

export interface Token {
    gen(item: Item, masculine: boolean, plural: boolean, vowel: boolean, p: Price);
}
