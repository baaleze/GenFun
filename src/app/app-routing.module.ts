import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FakewordsComponent } from './fakewords/fakewords.component';
import { LootComponent } from './loot/loot.component';


const routes: Routes = [
  {path: '', redirectTo: 'gen/loot', pathMatch: 'full'},
  {path: 'gen/fake', component: FakewordsComponent},
  {path: 'gen/loot', component: LootComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
