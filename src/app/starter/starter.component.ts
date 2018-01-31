import { Component, OnInit, NgModule, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
  providers: [ ApiService ]
})
export class StarterComponent {
  @Output() pokemonEmitter = new EventEmitter();
  starter;
  constructor(private api: ApiService) { }
  getStarterPokemon(name: string) {
    this.api.getStarterPokemonSprite(name).subscribe(response => {
      this.starter = response.json();
      const selectedPokemon = new Pokemon(this.starter.sprites.back_default, this.starter.stats[5].base_stat, this.starter.stats[5].base_stat, this.starter.types[0].type.name, this.starter.name, [this.starter.moves[0].move.name, this.starter.moves[1].move.name, this.starter.moves[2].move.name, this.starter.moves[3].move.name]);
      this.pokemonEmitter.emit(selectedPokemon);
    });
  }

}
