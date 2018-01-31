import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';

import { StarterComponent } from './starter/starter.component';
import { Pokemon, Pokemonenemy } from './pokemon.model';
import { HttpModule } from '@angular/http';
import { MovesComponent } from './moves/moves.component';
import { RunAwayComponent } from './run-away/run-away.component';



@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    StarterComponent,
    MovesComponent,
    RunAwayComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
