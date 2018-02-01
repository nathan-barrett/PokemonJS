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
  @Output() battleDoneEmitter = new EventEmitter();
  opponent;
  level;
  startMenu: boolean = true;
  moveScreen: boolean = false;
  runScreen: boolean = false;
  moveResult: boolean = false;
  selectedMove: string;
  attackSuccess: boolean = false;
  attackFailure: boolean = false;
  death: boolean = false;
  enemyDeath: boolean = false;
  playerDeath: boolean = false;
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
      this.childPlayerPokemon.currentHp = this.childPlayerPokemon.hp;
      const enemyPokemon = new Pokemonenemy(this.opponent.sprites.front_default, this.opponent.stats[5].base_stat, this.opponent.stats[5].base_stat, this.opponent.types[0].type.name, this.opponent.name,[this.opponent.moves[0].move.name, this.opponent.moves[1].move.name, this.opponent.moves[2].move.name, this.opponent.moves[3].move.name]);
      this.enemyEmitter.emit(enemyPokemon);

    });
  }

  enemyAttack() {
    this.randomAttack = Math.floor(Math.random() * (4 - 0) + 0);
    this.attackSuccess = false;
    this.attackFailure = false;
    let number = Math.floor(Math.random() * Math.floor(100));
    if (number <= 15) {
      this.enemyFailure = true;
      this.enemySuccess = false;
      setTimeout(() => {
        this.returnToMenu()
      }, 4000)
    } else {
      this.enemySuccess = true;
      this.enemyFailure = false;
      this.randomNumberEnemy()
      this.isPlayerDead();
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
    this.attackAccuracy();
    this.selectedMove = moveName;
    this.isPokemonDead();
  }
  attackAccuracy() {
    let number = Math.floor(Math.random() * Math.floor(100));
    if (number <= 15) {
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
  returnToMap() {
    this.battleDoneEmitter.emit();
    this.death = false;
    this.startMenu = true;
  }
  isPokemonDead() {
    if(this.childEnemyPokemon.currentHp < 1){
      this.death = true;
      this.enemyDeath = true;
      this.moveResult = false;
      setTimeout(() => {
        this.returnToMap();
      }, 3000)
    }else{
      setTimeout(() => {
        this.enemyAttack();
      }, 3000)
    }
  }
  isPlayerDead() {
    if(this.childPlayerPokemon.currentHp < 1){
      this.death = true;
      this.moveResult = false;
      this.playerDeath = true;
      setTimeout(() => {
        this.returnToMap()
      }, 5000)
    }else{
      setTimeout(() => {
        this.returnToMenu();
      }, 3000)
    }
  }

  randomNumber() {
    let attackAmt = Math.floor(Math.random() * (20- 5) + 5);
    this.childEnemyPokemon.currentHp = this.childEnemyPokemon.currentHp - attackAmt;
  }
  randomNumberEnemy() {
    let attackAmt = Math.floor(Math.random() * (15 - 5) + 5);
    this.childPlayerPokemon.currentHp = this.childPlayerPokemon.currentHp - attackAmt;
  }

  bagEmpty() {
    this.moveResult = true;
    this.emptyBag = true;
    this.startMenu = false;
    this.enemyFailure = false;
    this.enemySuccess = false;
    this.attackFailure = false;
    this.attackSuccess = false;
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
    this.enemyFailure = false;
    this.enemySuccess = false;
    this.attackFailure = false;
    this.attackSuccess = false;
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
      this.enemyFailure = false;
      this.enemySuccess = false;
      this.attackFailure = false;
      this.attackSuccess = false;
      setTimeout(() => {
        this.startMenu = true;
        this.moveResult =  false;
        this.runSuccess = false;
        this.returnToMap();
      }, 2000)
    } else {
      this.moveResult =  true;
      this.runFailure = true;
      this.startMenu = false;
      this.enemyFailure = false;
      this.enemySuccess = false;
      this.attackFailure = false;
      this.attackSuccess = false;
      setTimeout(() => {
        this.startMenu = true;
        this.moveResult =  false;
        this.runFailure = false;
      }, 4000)
    }
  }

}
