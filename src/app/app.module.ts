import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { StarterComponent } from './starter/starter.component';
import { Pokemon, Pokemonenemy } from './pokemon.model';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    StarterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
