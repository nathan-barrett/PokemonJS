import { Component } from '@angular/core';
import { Pokemon, Pokemonenemy } from './pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  playerPokemon: Pokemon;
  enemyPokemon: Pokemonenemy;
  battle: boolean = true;

  setPlayerPokemon(pokemonObject: Pokemon){
    this.playerPokemon = pokemonObject;
    this.battle = true;
  }
  setEnemyPokemon(enemyObject: Pokemonenemy) {
    this.enemyPokemon = enemyObject;
  }
}
