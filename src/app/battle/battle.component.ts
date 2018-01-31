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
  startMenu: boolean = true;
  moveScreen: boolean = false;
  runScreen: boolean = false;
  moveResult: boolean = false;
  selectedMove: string;
  attackSuccess: boolean = false;
  attackFailure: boolean = false;


  getRandomInt(max) {
    let id = Math.floor(Math.random() * Math.floor(max));
    return this.apiRandomEnemy(id);
  }

  constructor(private api: ApiService) { }
  apiRandomEnemy(id: number) {
    this.api.getPokemonEnemy(id).subscribe(response => {
      this.opponent = response.json();
      const enemyPokemon = new Pokemonenemy(this.opponent.sprites.front_default, this.opponent.stats[5].base_stat, this.opponent.stats[5].base_stat, this.opponent.types[0].type.name, this.opponent.name,[this.opponent.moves[0].move.name, this.opponent.moves[1].move.name, this.opponent.moves[2].move.name, this.opponent.moves[3].move.name]);
      this.enemyEmitter.emit(enemyPokemon);
    });
  }
  randomLevel(max) {
    let level = Math.floor(Math.random() * Math.floor(max));
    return level;
  }
  goToMoveList() {
    this.startMenu = false
    this.moveScreen = true
  }
  setDamage(moveName) {
    this.moveScreen = false;
    this.moveResult = true;
    this.attackAccuracy()
    this.selectedMove = moveName;
    setTimeout(() => {
      this.returnToMenu()
    }, 4000)
  }
  attackAccuracy() {
    let number = Math.floor(Math.random() * Math.floor(100));
    if (number <= 30) {
      this.attackFailure = true;
    } else {
      this.attackSuccess = true;
      this.randomNumber()
    }
  }

  returnToMenu() {
    this.moveResult = false;
    this.startMenu = true;
  }

  randomNumber() {
    let attackAmt = Math.floor(Math.random() * (25 - 5) + 5);
    this.childEnemyPokemon.currentHp = this.childEnemyPokemon.currentHp - attackAmt;
    console.log(this.childEnemyPokemon.currentHp);

  }

}
