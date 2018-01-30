import { Component, OnInit, NgModule } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
  providers: [ ApiService ]
})
export class StarterComponent {
  starter;
  constructor(private api: ApiService) { }
  getStarterPokemon(name: string) {
    this.api.getStarterPokemonSprite(name).subscribe(response => {
      this.starter = response.json();
      console.log(this.starter);
      const selectedPokemon = new Pokemon(this.starter.sprites.back_default, this.starter.stats[5].base_stat, this.starter.types[0].type.name, this.starter.name);
      console.log(selectedPokemon);
    });
  }

}
