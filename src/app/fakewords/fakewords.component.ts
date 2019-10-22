import { Component, OnInit } from '@angular/core';
import { MarkovCharGenerator } from '../markov/markovgenerator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fakewords',
  templateUrl: './fakewords.component.html',
  styleUrls: ['./fakewords.component.scss']
})
export class FakewordsComponent implements OnInit {

  public settings = {
    'french words': { file: 'french.txt', factor: 4, end: '$', maxLenght: 12 },
    'english words': { file: 'english.txt', factor: 4, end: '$', maxLenght: 10 },
    'french cities': { file: 'villes_france.csv', factor: 4, end: '$', maxLenght: 20 }
  };
  public settingList = [
    'french words',
    'english words',
    'french cities'
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
