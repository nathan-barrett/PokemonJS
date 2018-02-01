import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { MapComponent } from './map/map.component';

import { StarterComponent } from './starter/starter.component';
import { Pokemon, Pokemonenemy } from './pokemon.model';
import { HttpModule } from '@angular/http';
import { MovesComponent } from './moves/moves.component';
import { RunAwayComponent } from './run-away/run-away.component';
import { DeathAlertComponent } from './death-alert/death-alert.component';



@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    StarterComponent,
    MovesComponent,
    RunAwayComponent,
    MapComponent,
    DeathAlertComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
