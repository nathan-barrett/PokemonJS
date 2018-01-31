import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { Pokemon, Pokemonenemy } from '../pokemon.model';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
  providers: [ApiService]
})

export class BattleComponent {
  @Input() childPlayerPokemon: Pokemon;
  @Input() childEnemyPokemon: Pokemonenemy;
  @Output() enemyEmitter = new EventEmitter();
  opponent;
  level;

  getRandomInt(max) {
    let id = Math.floor(Math.random() * Math.floor(max));
    return this.apiRandomEnemy(id);
  }

  constructor(private api: ApiService) { }
  apiRandomEnemy(id: number) {
    this.api.getPokemonEnemy(id).subscribe(response => {
      console.log(id);
      this.opponent = response.json();
      const enemyPokemon = new Pokemonenemy(this.opponent.sprites.front_default, this.opponent.stats[5].base_stat, this.opponent.types[0].type.name, this.opponent.name);
      console.log(enemyPokemon);
      this.enemyEmitter.emit(enemyPokemon);
    });
  }

  randomLevel(max) {
    let level = Math.floor(Math.random() * Math.floor(max));
    return level;
  }

}
