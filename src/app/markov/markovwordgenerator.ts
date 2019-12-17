import { Probas } from './probas';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { StringEndingChecker } from './endingchecker';

export class MarkovWordGenerator {
    private probas = new Map<string, Probas<string>>();
    private end = '$';
    private endChecker = new StringEndingChecker(this.end);

    constructor(
        private factor: number,
        private max: number) {}

// OUT
public generateSentence(): string {
    // starting with empty token
    let token = 'ST$RT';
    const sentence = [];
    let nextWord = '';
    let tokenAsWords: RegExpMatchArray;
    let prob: Probas<string>;
    // only stop when reaching end character or max length
    while (sentence.length < 200) {
        // get next word chain
        prob = this.probas.get(token);
        if (!prob) {
            console.log(token);
        }
        token = prob.random(sentence.length > this.max);

        // get the last word (only the last is new, the rest is what we have already)
        // e.g. "the last word" will generate "last word is". We only get "is"
        tokenAsWords = token.match(/.*?[\.\s]+?/g);
        nextWord = tokenAsWords[tokenAsWords.length - 1];

        if (token.charAt(token.length -1) === this.end) {
            // end char, we stop!
            break;
        }

        // append it to the sentence
        if (sentence.length === 0) {
            sentence.push(token);
        } else {
            sentence.push(nextWord);
        }
    }

    return sentence.join('');
}

// IN
public loadText(t: string) {
    // split into sentences
    const sentences = t.match( /[^\.!\?]+[\.!\?]+/g );
    sentences.forEach(
        (s, i) => {
            if (i % 100 === 0) {console.log('LOADING SENTENCE ' + i + ' /' + sentences.length);}
            this.loadSentence(s);
        }
    );
}

public loadSentence(w: string) {
    // get chars from string and append the end char at then end
    const words = w.match(/.*?[\.\s]+?/g);
    if (words === null) {
        return;
    }
    words.push(this.end);
    let wordChain;
    let currentToken = 'ST$RT';

    for (let i = 0; (i + this.factor) < words.length + 1; i++) {
        wordChain = words.slice(i, i + this.factor).join('');
        const p = this.probas.get(currentToken);
        if (p === undefined) {
            // new proba
            this.probas.set(currentToken, new Probas<string>(wordChain, this.endChecker));
        } else {
            p.addValue(wordChain);
        }
        currentToken = wordChain;
    }
}


public loadSentencesFromFile(fileName: string, http: HttpClient): Observable<void> {
    if (this.probas.size === 0) {
        return this.readResource(fileName, http);
    } else {
        return of();
    }
}

private readResource(fileName: string, http: HttpClient): Observable<void> {
    return http.get('/assets/' + fileName, {responseType: 'text'}).pipe(
        map(text => {
            this.loadText(text);
        })
    );
}
}
