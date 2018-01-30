import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent {
  @Input() childPlayerPokemon: Pokemon;
  constructor() { }


}
