import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabs: Tab[] = [
    'MARKOV', 'LOOT', 'GRAMMAR', 'BOT'
  ];
  currentTab: Tab = 'MARKOV';

}

export type Tab = 'MARKOV' | 'LOOT' | 'GRAMMAR' | 'BOT';
