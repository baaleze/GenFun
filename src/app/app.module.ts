import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FakewordsComponent } from './fakewords/fakewords.component';
import { LootComponent } from './loot/loot.component';
import { GrammarComponent } from './grammar/grammar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotabotComponent } from './notabot/notabot.component';

@NgModule({
  declarations: [
    AppComponent,
    FakewordsComponent,
    LootComponent,
    GrammarComponent,
    NotabotComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
