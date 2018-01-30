import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { MovesComponent } from './moves/moves.component';


@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    MovesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
