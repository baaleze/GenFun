import { NounGroup } from './noungroup';
import { StringToken } from './stringtoken';
import { Item } from '../item';
import { Price } from '../price';
import { TerminalType } from '../terminal/terminaltype';

export class NumberedNounGroup extends NounGroup {

    constructor(
        prefix: StringToken,
        suffix: StringToken,
        type: TerminalType, qualifChance: number,
        materialChance: number) {
        super(prefix, suffix, true, type,  qualifChance, materialChance);
    }

    public getTokens(item: Item, p: Price): string[] {
        const tokens = super.getTokens(item, p);
        tokens.splice(1, 0, '' + Math.floor(Math.pow((Math.random() * 15 + 1), 2)));
        return tokens;
    }
}
