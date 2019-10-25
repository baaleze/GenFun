import { Terminal } from './terminal';

export class TerminalGenerator {

    private pool: Terminal[];
    constructor(items: string[], parsingFun: (s: string) => Terminal) {
        this.pool = items.map(i => parsingFun(i));
    }

    public gen<T extends Terminal>(): T {
        return this.pool[Math.floor(Math.random() * this.pool.length)] as T;
    }

}
