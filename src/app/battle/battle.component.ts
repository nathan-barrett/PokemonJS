import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Pokemon, Pokemonenemy } from '../pokemon.model';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
  providers: [ApiService]
})

export class BattleComponent implements OnInit {
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
  enemySuccess: boolean = false;
  enemyFailure: boolean = false;
  emptyBag: boolean = false;
  noPocketmonsters: boolean = false;
  runSuccess: boolean = false;
  runFailure: boolean = false;
  randomAttack: number;



  getRandomInt(max) {
    let id = Math.floor(Math.random() * Math.floor(max));
    return this.apiRandomEnemy(id);
  }
  ngOnInit(){
    this.getRandomInt(150);
  }

  constructor(private api: ApiService) { }
  apiRandomEnemy(id: number) {
    this.api.getPokemonEnemy(id).subscribe(response => {
      this.opponent = response.json();
      const enemyPokemon = new Pokemonenemy(this.opponent.sprites.front_default, this.opponent.stats[5].base_stat, this.opponent.stats[5].base_stat, this.opponent.types[0].type.name, this.opponent.name,[this.opponent.moves[0].move.name, this.opponent.moves[1].move.name, this.opponent.moves[2].move.name, this.opponent.moves[3].move.name]);
      this.enemyEmitter.emit(enemyPokemon);
    });
  }
  // switchTurn(){
  //   this.playerTurn = !this.playerTurn;
  // }
  enemyAttack() {
    this.randomAttack = Math.floor(Math.random() * (4 - 0) + 0);
    console.log(this.childEnemyPokemon.moves[this.randomAttack]);
    this.attackSuccess = false;
    this.attackFailure = false;
    let number = Math.floor(Math.random() * Math.floor(100));
    if (number <= 30) {
      this.enemyFailure = true;
      this.enemySuccess = false;
      setTimeout(() => {
        this.returnToMenu()
      }, 4000)
    } else {
      this.enemySuccess = true;
      this.enemyFailure = false;
      this.randomNumberEnemy()
      setTimeout(() => {
        this.returnToMenu()
      }, 4000)
    }
  }
  goToMoveList() {
    this.startMenu = false
    this.moveScreen = true
  }
  setDamage(moveName) {
    this.moveScreen = false;
    this.moveResult = true;
    this.enemySuccess = false;
    this.enemyFailure = false;
    this.attackAccuracy()
    this.selectedMove = moveName;
    setTimeout(() => {
      this.enemyAttack()
    }, 4000)
  }
  attackAccuracy() {
    let number = Math.floor(Math.random() * Math.floor(100));
    if (number <= 30) {
      this.attackFailure = true;
      this.attackSuccess = false;
    } else {
      this.attackSuccess = true;
      this.attackFailure = false;
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
  randomNumberEnemy() {
    let attackAmt = Math.floor(Math.random() * (25 - 5) + 5);
    this.childPlayerPokemon.currentHp = this.childPlayerPokemon.currentHp - attackAmt;
  }

  bagEmpty() {
    this.moveResult = true;
    this.emptyBag = true;
    this.startMenu = false;
    setTimeout(() => {
      this.startMenu = true;
      this.moveResult = false;
      this.emptyBag = false;
    }, 4000)
  }
  noPokemon() {
    this.moveResult = true;
    this.noPocketmonsters = true;
    this.startMenu = false;
    setTimeout(() => {
      this.startMenu = true;
      this.moveResult = false;
      this.noPocketmonsters = false;
    }, 4000)
  }
  runAttempt(){
    let attempt = Math.floor(Math.random() * Math.floor(100));
    if( attempt <= 80) {
      this.moveResult =  true;
      this.runSuccess = true;
      this.startMenu = false;
      setTimeout(() => {
        this.startMenu = true;
        this.moveResult =  false;
        this.runSuccess = false;
      }, 4000)
    } else {
      this.moveResult =  true;
      this.runFailure = true;
      this.startMenu = false;
      setTimeout(() => {
        this.startMenu = true;
        this.moveResult =  false;
        this.runFailure = false;
      }, 4000)
    }
  }
}
