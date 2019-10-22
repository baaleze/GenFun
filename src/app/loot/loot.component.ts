import { Component, OnInit } from '@angular/core';
import { Item } from './model/item';
import { LootGen } from './model/lootgen';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-loot',
  templateUrl: './loot.component.html',
  styleUrls: ['./loot.component.scss']
})
export class LootComponent implements OnInit {

  items: Item[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  public generateItems(nb: number): void {
    LootGen.default(this.http).subscribe(
        gen => {
            this.items = [];
            for (let i = 0; i < nb; i++) {
                this.items.push(gen.gen());
            }
        }
    );
}


}
