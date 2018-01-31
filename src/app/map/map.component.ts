import { Component, OnInit, AfterViewInit, ViewChild, Directive, ElementRef } from '@angular/core';
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

  // tileSet;
  sourceTileSize: number = 16;
  ctx: CanvasRenderingContext2D;

  loader: Loader = new Loader();
  keyboard: Keyboard = new Keyboard();
  map: Map = new Map(
    64, //tile size of 64px
    'location of tilset image',
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
    // this.ctx.clearRect(0, 0, 640, 640);
    // this.tileSet = new Image();
    // this.tileSet.src = './../../assets/images/tilesetz.png';
    // this.tileSet.onload = () => {
    //   this.drawMap();
    // }
  }

  // drawMap(){
  //   for (let column = 0; column < this.map.columns; column++){
  //     for (let row = 0; row < this.map.rows; row++){
  //       let tile = this.map.getTile(column, row);
  //       let sourceX, sourceY;
  //       sourceX = 1 * this.sourceTileSize + 1;
  //       sourceY = 0;
  //       this.ctx.drawImage(
  //         this.tileSet, //images
  //         sourceX, // source x
  //         sourceY, // source y
  //         this.sourceTileSize, //source width
  //         this.sourceTileSize, //source height
  //         column * this.map.tileSize, // target x coord
  //         row * this.map.tileSize, // target y coord
  //         this.map.tileSize, // target width
  //         this.map.tileSize, // target height
  //       )
  //       if (tile == 1) {
  //         sourceX = 40 * this.sourceTileSize;
  //         sourceY = 0;
  //         this.ctx.drawImage(
  //           this.tileSet, //images
  //           sourceX, // source x
  //           sourceY, // source y
  //           this.sourceTileSize, //source width
  //           this.sourceTileSize, //source height
  //           column * this.map.tileSize, // target x coord
  //           row * this.map.tileSize, // target y coord
  //           this.map.tileSize, // target width
  //           this.map.tileSize, // target height
  //         )
  //       }
  //     }
  //   }
  // }
}
