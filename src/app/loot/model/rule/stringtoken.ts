import { LootGen } from '../lootgen';
import { Price } from '../price';
import { Item } from '../item';
import { Token } from './token';

export class StringToken implements Token {

    public static vowels = 'aeiouyéèàêôîâû';

    constructor(
        public feminineSingular: string,
        public femininePlural: string,
        public masculineSingular: string,
        public masculinePlural: string,
        public singularVowel: string
    ) {}

    public gen(item: Item, masculine: boolean, plural: boolean, vowel: boolean, p: Price) {
        return masculine
            ? (plural ? this.masculinePlural : (vowel ? this.singularVowel : this.masculineSingular))
            : (plural ? this.femininePlural : (vowel ? this.singularVowel : this.feminineSingular));
    }

}
