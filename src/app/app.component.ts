import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tabs: Tab[] = [
    'FAKE', 'LOOT', 'GRAMMAR'
  ];
  currentTab: Tab = 'FAKE';

}

export type Tab = 'FAKE' | 'LOOT' | 'GRAMMAR';
