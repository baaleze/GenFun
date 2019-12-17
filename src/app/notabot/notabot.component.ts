import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MarkovWordGenerator } from '../markov/markovwordgenerator';

@Component({
  selector: 'app-notabot',
  templateUrl: './notabot.component.html',
  styleUrls: ['./notabot.component.scss'],
  animations: [
    trigger('appear', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s')
      ])
    ])
  ]
})
export class NotabotComponent implements OnInit {

  public settings = { file: 'lexicon.txt', factor: 2, end: '$', maxLenght: 50 };
  public s: string;

  public words: string[] = [];

  public markov: MarkovWordGenerator;

  constructor(private http: HttpClient) {
    this.markov = new MarkovWordGenerator(this.settings.factor, this.settings.maxLenght);
  }

  ngOnInit() {
  }

  public generate(nb: number) {
    this.generateFor(
      this.settings.file, nb);
  }

  private generateFor(fileName: string, toGenerate: number): void {
    this.words = ['loading...'];
    this.markov.loadSentencesFromFile(fileName, this.http).subscribe(
      () => {},
      error => {},
      () => {
      this.words = [];
      let count = 0;
      while (count < toGenerate) {
        this.words.push(this.markov.generateSentence());
        count++;
      }
    });
}


}
