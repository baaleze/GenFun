import { Component, OnInit } from '@angular/core';

declare const RiGrammar: any;

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.scss']
})
export class GrammarComponent implements OnInit {

  phrases: string[] = [];

  constructor() { }

  ngOnInit() {
    const grammar = new RiGrammar({
      '<start>': [ 'HEY', 'OH' ]});
    this.phrases = [grammar.expand()];
  }

}
