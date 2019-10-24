import { Component, OnInit } from '@angular/core';
import { MarkovCharGenerator } from '../markov/markovgenerator';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-fakewords',
  templateUrl: './fakewords.component.html',
  styleUrls: ['./fakewords.component.scss'],
  animations: [
    trigger('appear', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s')
      ])
    ])
  ]
})
export class FakewordsComponent implements OnInit {

  public settings = {
    'french cities': { file: 'villes_france.csv', factor: 4, end: '$', maxLenght: 20 },
    'french words': { file: 'french.txt', factor: 4, end: '$', maxLenght: 12 },
    'french names': { file: 'prenoms.txt', factor: 3, end: '$', maxLenght: 8},
    'english words': { file: 'english.txt', factor: 4, end: '$', maxLenght: 10 },
  };
  public settingList = [
    'french cities',
    'french words',
    'french names',
    'english words'
  ];
  public s: string;

  public words: string[] = [];

  public markov: MarkovCharGenerator;

  constructor(private http: HttpClient) {
    this.s = this.settingList[0];
    this.markov = new MarkovCharGenerator(this.settings[this.s].factor, this.settings[this.s].end, this.settings[this.s].maxLenght);
  }

  ngOnInit() {
  }

  public updateGenSetting() {
    this.markov = new MarkovCharGenerator(this.settings[this.s].factor, this.settings[this.s].end, this.settings[this.s].maxLenght);
  }

  public generate(nb: number) {
    this.generateFor(
      this.settings[this.s].file, nb);
  }

  private generateFor(fileName: string, toGenerate: number): void {
    this.words = ['loading...'];
    this.markov.loadWordsFromFile(fileName, this.http).subscribe(
      () => {},
      error => {},
      () => {
      this.words = [];
      let count = 0;
      while (count < toGenerate) {
        this.words.push(this.markov.generateWord());
        count++;
      }
    });
}


}
