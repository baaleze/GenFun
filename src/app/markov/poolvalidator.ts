export interface PoolValidator<T> {
    endIsInPool(token: T): boolean;
}
export class StringPoolValidator implements PoolValidator<string> {

    private pool: string[] = [];

    constructor(poolString: string) {
        for (const char of poolString) {
            this.pool.push(char);
        }
    }

    public removeFromPool(c: string) {
        const index = this.pool.indexOf(c);
        if (index !== -1) {
            this.pool.splice(index, 1);
        }
    }

    public endIsInPool(token: string): boolean {
        return this.pool.indexOf(token.charAt(token.length - 1)) !== -1;
    }
}
