import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { MovesComponent } from './moves/moves.component';
import { RunAwayComponent } from './run-away/run-away.component';


@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    MovesComponent,
    RunAwayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
