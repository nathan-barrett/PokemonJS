import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
