import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { StarterComponent } from './starter/starter.component';
import { Pokemon } from './pokemon.model';


@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    StarterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
