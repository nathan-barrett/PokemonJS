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
  battle: boolean = false;

  setPlayerPokemon(pokemonObject: Pokemon){
    this.playerPokemon = pokemonObject;
  }

  setEnemyPokemon(enemyObject: Pokemonenemy) {
    this.enemyPokemon = enemyObject;
  }

  toggleBattle(){
    console.log("Fight message received, toggling battle");
    this.battle = !this.battle;
  }
}
