import { Loader } from './loader.model';
import { Keyboard } from './keyboard.model';
import { Hero } from './hero.model';
import { Map } from './map.model';

export class Game {
  private ctx;
  private _previousElapsed = 0;
  private hero: Hero;
  private tileAtlas;

  constructor(public loader: Loader, public keyboard: Keyboard, public map: Map){}

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
    this.ctx.clearRect(0, 0, 512, 512);

    // compute delta time in seconds -- also casp it
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
        this.keyboard.RIGHT,
        this.keyboard.UP,
        this.keyboard.DOWN ]
      );{
      this.tileAtlas = this.loader.getImage('tiles');
      this.hero = new Hero(this.loader, this.map, 160, 160);
      // this.camera = new Camera(map, 512, 512);
      // this.camera.follow(this.hero);
    }
  }

  update(delta){
    // handle hero movement with arrow keys
    var dirx = 0;
    var diry = 0;
    if (this.keyboard.isDown(this.keyboard.LEFT)) { dirx = -1; }
    else if (this.keyboard.isDown(this.keyboard.RIGHT)) { dirx = 1; }
    else if (this.keyboard.isDown(this.keyboard.UP)) { diry = -1; }
    else if (this.keyboard.isDown(this.keyboard.DOWN)) { diry = 1; }

    this.hero.move(delta, dirx, diry);
    // this.camera.update();
  }

  _drawLayer(layer: number){

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

  // START UP FUNCTION
//   window.onload = function() {
//     const context = document.getElementById('areaMap').getContext('2d');
//     Game.run(context);
//   }
