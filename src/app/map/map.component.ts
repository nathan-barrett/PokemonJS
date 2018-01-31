import { Component, OnInit, AfterViewInit, ViewChild, Directive, ElementRef, Output, EventEmitter } from '@angular/core';
import { Map } from '../map.model';
import { Game } from '../game.model';
import { Keyboard } from '../keyboard.model';
import { Hero } from '../hero.model';
import { Loader } from '../loader.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  ngOnInit(){}

  @ViewChild('areaMap') areaMap: ElementRef;
  @Output() fightEmitter = new EventEmitter();

  // tileSet;
  sourceTileSize: number = 16;
  ctx: CanvasRenderingContext2D;

  loader: Loader = new Loader();
  keyboard: Keyboard = new Keyboard();
  map: Map = new Map(
    64, //tile size of 64px
    // '../../assets/images/tilesetz.png',
    10, //number of cols in the map
    10, //number of rows in the map
    [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ]
  );
  hero: Hero = new Hero(this.loader, this.map, 0, 0);
  game: Game = new Game(this.loader, this.keyboard, this.map);

  constructor() { }

  ngAfterViewInit() {
    this.ctx = this.areaMap.nativeElement.getContext('2d');

    this.game.run(this.ctx);
  }

  makeFight(){
    console.log("Making fight...");
    this.fightEmitter.emit();
  }

}
