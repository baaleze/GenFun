export interface EndingChecker<T> {
    isEnd(toCheck: T): boolean;
}

export class StringEndingChecker implements EndingChecker<string> {

    constructor(private end: string) {}

    isEnd(t: string): boolean {
        return t.charAt(t.length - 1) === this.end;
    }
}
