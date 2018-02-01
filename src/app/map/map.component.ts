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

  tileAtlas;
  _previousElapsed = 0;
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
      1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 1, 0, 0, 0, 0, 1, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ]
  );
  hero: Hero = new Hero(this.loader, this.map, 0, 0);
  // game: Game = new Game(this.loader, this.keyboard, this.map);

  constructor() {
    this.tick = this.tick.bind(this);
  }

  ngAfterViewInit() {
    this.ctx = this.areaMap.nativeElement.getContext('2d');

    this.run(this.ctx);
  }

  makeFight(){
    this.fightEmitter.emit();
  }

  run(context){
    this.ctx = context;
    this._previousElapsed = 0;

    let p = this.load();
    Promise.all(p).then(function (loaded) {
      this.init();
      window.requestAnimationFrame(this.tick);
    }.bind(this));
  }//end of run() method

  tick(elapsed) {
    window.requestAnimationFrame(this.tick);

    // clear previous frame
    this.ctx.clearRect(0, 0, 640, 640);

    // compute delta time in seconds -- also cap it
    let delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this._previousElapsed = elapsed;

    this.update(delta);
    this.render();
  }//.bind(this);

  //returns an array of image atlases (sprite sheets) for use in rendering the map and player character
  load(){
    return [
      this.loader.loadImage('tiles', '../assets/images/tilesetz.png'),
      this.loader.loadImage('hero', '../assets/images/trainer-sprites.png')
    ];
  }

  init(){
    this.keyboard.listenForEvents(
      [ this.keyboard.LEFT,
        this.keyboard.A_LEFT,
        this.keyboard.RIGHT,
        this.keyboard.D_RIGHT,
        this.keyboard.UP,
        this.keyboard.W_UP,
        this.keyboard.DOWN,
        this.keyboard.S_DOWN ]
      );{
      this.tileAtlas = this.loader.getImage('tiles');
      this.hero = new Hero(this.loader, this.map, 320, 320);
      // this.camera = new Camera(map, 512, 512);
      // this.camera.follow(this.hero);
    }
  }

  update(delta){
    // handle hero movement with arrow keys
    var dirx = 0;
    var diry = 0;
    if (this.keyboard.isDown(this.keyboard.LEFT)) { dirx = -1; }
    else if (this.keyboard.isDown(this.keyboard.A_LEFT)) { dirx = -1; }
    else if (this.keyboard.isDown(this.keyboard.RIGHT)) { dirx = 1; }
    else if (this.keyboard.isDown(this.keyboard.D_RIGHT)) { dirx = 1; }
    else if (this.keyboard.isDown(this.keyboard.UP)) { diry = -1; }
    else if (this.keyboard.isDown(this.keyboard.W_UP)) { diry = -1; }
    else if (this.keyboard.isDown(this.keyboard.DOWN)) { diry = 1; }
    else if (this.keyboard.isDown(this.keyboard.S_DOWN)) { diry = 1; }

    if (this.hero.move(delta, dirx, diry)){
      console.log("Should be making fight now, but...");
      this.makeFight();
    }
    // this.camera.update();
  }

  _drawLayer(layer: number){
    for (let column = 0; column < this.map.columns; column++){
      for (let row = 0; row < this.map.rows; row++){
        let tile = this.map.getTile(column, row);
        let sourceX, sourceY;
        sourceX = 1 * this.sourceTileSize + 1;
        sourceY = 0;
        this.ctx.drawImage(
          this.tileAtlas, //images
          sourceX, // source x
          sourceY, // source y
          this.sourceTileSize, //source width
          this.sourceTileSize, //source height
          column * this.map.tileSize, // target x coord
          row * this.map.tileSize, // target y coord
          this.map.tileSize, // target width
          this.map.tileSize, // target height
        )
        if (tile == 1) {
          sourceX = 40 * this.sourceTileSize;
          sourceY = 0;
          this.ctx.drawImage(
            this.tileAtlas, //images
            sourceX, // source x
            sourceY, // source y
            this.sourceTileSize, //source width
            this.sourceTileSize, //source height
            column * this.map.tileSize, // target x coord
            row * this.map.tileSize, // target y coord
            this.map.tileSize, // target width
            this.map.tileSize, // target height
          )
        }
      }
    }
  }

  render(){
    //draw map background layer
    this._drawLayer(0);

    // draw player character
    this.ctx.drawImage(
      this.hero.image,
      this.hero.x - this.hero.width / 2,
      this.hero.y - this.hero.height / 2);

    // draw map top layer
    // this._drawLayer(1);

    // draw grid lines on top of all that?
    // this._drawGrid();
  }

}
