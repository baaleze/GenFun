import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

declare const RiGrammar: any;

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss'],
  animations: [
    trigger('appear', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s')
      ])
    ])
  ]
})
export class GrammarComponent implements OnInit {

  grammars: string[] = [ 'FPS Games'];
  selectedGrammar = 'FPS Games';
  phrases: string[] = [];
  grammar: any;
  key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                   "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                   "","I","II","III","IV","V","VI","VII","VIII","IX"];
  grammarDefinitions = {
    'FPS Games': {
      '<start>': [ '<first> <next>' ],
      '<first>': [ '<main>', '<main>', '<main>', '<main>', '<from> <main>' ],
      '<from>': [ '%Tom Clancy\'s%%', '', '', '', '', '', '', '', ''],
      '<next>': [ '%<main> <end>%%', '<number>', '%<end>%%'],
      '<end>': [ '<main>', '<number>', 'GOTY', 'Ultimate', 'Director\'s cut', 'Collector Edition', 'Platinum', '', '', '', '', '', '<next>' ],
      '<main>': [ '<noun> <lig> <concept>', '<concept> <noun>', '<adjective> <noun>' ],
      '<lig>': [ 'of', 'for', '\'s'],
      '<noun>': [ 'Medal', 'Fight', 'Band', 'Conflict', 'War', 'Gears', 'Weapons', 'Cell', 'Army', 'Assault', 'Combat', 'Ghost', 'Call', 'Warfare', 'Battlefield', 'Crisis', 'Shadow', 'Armor' ],
      '<concept>': [ 'War', 'Honor', 'Brothers', 'Conflict', 'Terror', 'Infinity', 'Recon', 'Duty', 'Ops', 'Liberty', 'Justice', 'Annihilation', 'Chaos' ],
      '<adjective>': [ 'Ultimate', 'Complete', 'Direct', 'Phantom', 'Total', 'Imminent', 'Close', 'Modern', 'Black', 'Lethal', 'Metal', 'Iron' ],
      '<number>': [ 'NUMBER', 'ROMAN' ]
    }
  };

  constructor() { }

  ngOnInit() {
    this.changeGrammar();
  }

  changeGrammar() {
    this.grammar = new RiGrammar(this.grammarDefinitions[this.selectedGrammar]);
  }

  generate(nb: number) {
    this.phrases = [];
    for(let i = 0; i < nb; i++) {
      let str = <string>this.grammar.expand();
      while(str.indexOf('NUMBER') !== -1) {
        str = str.replace('NUMBER', this.generateNumber(false));
      }
      while(str.indexOf('ROMAN') !== -1) {
        str = str.replace('ROMAN', this.generateNumber(true));
      }
      
      str = str.replace(/%%/g, '</span>');
      str = str.replace(/%/g, '<span class="subtitle">');
      this.phrases.push(str)
    }
  }

  generateNumber(roman: boolean): string {
    if (roman) {
        const num = Math.ceil(Math.random() * 12);
        let digits = String(+num).split('');
        let roman = '';
        let i = 3;
        while (i--) {
          roman = (this.key[+digits.pop() + (i * 10)] || '') + roman;
        }
        return Array(+digits.join() + 1).join('M') + roman;
    } else if (Math.random() > 0.5) {
      return '' + Math.ceil(Math.random() * 10);
    } else {
      return '' + (Math.ceil(Math.random() * 200) + 1900);
    }
  }

}
