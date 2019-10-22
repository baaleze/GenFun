import { EndingChecker } from './endingchecker';
import { PoolValidator } from './poolvalidator';

export class Probas<T> {
    private sum = 0;
    private possibleValues = new Map<T, number>();

    // when building a proba at least one value must be provided
    constructor(
        firstPossibleValue: T,
        private endingChecker: EndingChecker<T>) {
        this.addValue(firstPossibleValue);
    }

    // OUT
    public random(endIfPossible: boolean, validator?: PoolValidator<T>): T {
        // the word needs to end, get the first token that is valid
        if (endIfPossible) {
            this.possibleValues.forEach((value, key) => {
                if (this.endingChecker.isEnd(key)) {
                    return key;
                }
            });
        }

        // do we need to filter ?
        let possibleValuesToUse = this.possibleValues;
        let sumToUse = this.sum;
        if (validator) {
            possibleValuesToUse = new Map<T, number>();
            sumToUse = 0;
            this.possibleValues.forEach((value, key) => {
                if (validator.endIsInPool(key)) {
                    possibleValuesToUse.set(key, value);
                    sumToUse += value;
                }
            });
        }

        // random int between 0 and sum
        const r = Math.floor(Math.random() * sumToUse);

        let cumul = 0;
        for (const e of possibleValuesToUse) {
            cumul += e[1];
            if (r < cumul) {
                return e[0];
            }
        }
        // should not happen
        return undefined;
    }

    // IN
    public addValue(value: T): void {
        const p = this.possibleValues.get(value);
        if (p !== undefined) {
            // add
            this.possibleValues.set(value, p + 1);
        } else {
            // new
            this.possibleValues.set(value, 1);
        }
        // increment global sum
        this.sum++;
    }

    public addValues(values: T[]): void {
        values.forEach(v => this.addValue(v));
    }

}
