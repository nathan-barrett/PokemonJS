import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectBulbasaur(){}
  selectCharmander(){}
  selectSquirtle(){}

}
