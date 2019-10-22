import { Probas } from './probas';
import { StringEndingChecker } from './endingchecker';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export class MarkovCharGenerator {
    constructor(
        private factor: number,
        private end: string,
        private max: number) {}
    private probas = new Map<string, Probas<string>>();
    private checker = new StringEndingChecker(this.end);

// OUT
public generateWord(): string {
    // starting with empty token
    let token = '';
    let word = '';
    let nextChar = '';
    // only stop when reaching end character or max length
    while (true) {
        // get next char chain
        token = this.probas.get(token).random(word.length > this.max);

        // get the last char
        nextChar = token.charAt(token.length - 1);

        if (nextChar === this.end) {
            // end char, we stop!
            break;
        }

        // append it to the word
        word = word.concat(nextChar);
    }

    return word.toString();
}

// IN
public loadWord(w: string) {
    // get chars from string and append the end char at then end
    const chars = w + this.end;

    let charChain = chars.substring(0, this.factor);
    let currentToken = '';

    for (const char of chars) {
        // shift chain to the rigth
        // nic >> ice (+e)
        charChain = charChain.substring(1) + char;
        const p = this.probas.get(currentToken);
        if (p === undefined) {
            // new proba
            this.probas.set(currentToken, new Probas<string>(charChain, this.checker));
        } else {
            p.addValue(charChain);
        }
        currentToken = charChain;
    }
}

public loadWords(words: string[]) {
    words.forEach(w => this.loadWord(w));
}

public loadWordsFromFile(fileName: string, http: HttpClient): Observable<void> {
    if (this.probas.size === 0) {
        return this.readResource(fileName, http);
    } else {
        return of();
    }
}

private readResource(fileName: string, http: HttpClient): Observable<void> {
    return http.get('/assets/' + fileName, {responseType: 'text'}).pipe(
        map(text => {
            this.loadWords(text.split('\n'));
        })
    );
}
}
