import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';
import { Pokemon, Pokemonenemy } from '../pokemon.model';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.scss'],
  providers: [ApiService]
})
export class MovesComponent implements OnInit {
  @Input() childPlayerPokemon: Pokemon;
  @Output() attackEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  attack(moveName) {
    this.attackEmitter.emit(moveName);
  }
}
