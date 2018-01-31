// import { Map } from './map.model';
// import { Loader } from './loader.model';
//
// export class Hero {
//   SPEED: number = 256; //pixels per second
//   width: number;
//   height: number;
//   image;
//
//   constructor(
//     public loader: Loader,
//     public map: Map,
//     public x: number,
//     public y: number) {
//       this.x = x;
//       this.y = y;
//       this.width = map.tileSize;
//       this.height = map.tileSize;
//       this.image = loader.getImage('hero');
//   }
//
//   move(delta: number, dirx: number, diry: number) {
//     //move the hero
//     this.x += dirx * this.SPEED * delta;
//     this.y += diry * this.SPEED * delta;
//
//     // check if we walked into a non-walkable tile
//     this._collide(dirx, diry);
//
//     // clamp values ??
//     let maxX = this.map.columns * this.map.tileSize;
//     let maxY = this.map.rows * this.map.tileSize;
//     this.x = Math.max(0, Math.min(this.x, maxX));
//     this.y = Math.max(0, Math.min(this.y, maxY));
//   }
//
//   _collide( dirx: number, diry: number ){
//     let row, col;
//     // -1 in right and bottom is because image ranges from 0..63
//     // and not up to 64
//     let left = this.x - this.width /2;
//     let right = this.x + this.width / 2 - 1;
//     let top = this.y - this.height / 2;
//     let bottom = this.y + this.height / 2 - 1;
//
//     // check for collisions on sprite sides
//     const collision =
//       this.map.isSolidTileAtXY(left, top) ||
//       this.map.isSolidTileAtXY(right, top) ||
//       this.map.isSolidTileAtXY(right, bottom) ||
//       this.map.isSolidTileAtXY(left, bottom);
//     if (!collision) { return; }
//
//     if (diry > 0) {
//       row = this.map.getRow(bottom);
//       this.y = -this.height / 2 + this.map.getY(row);
//     }
//     else if (diry < 0) {
//       row = this.map.getRow(top);
//       this.y = this.height / 2 + this.map.getY(row + 1);
//     }
//     else if (dirx > 0) {
//       col = this.map.getCol(right);
//       this.x = -this.width / 2 + this.map.getX(col);
//     }
//     else if (dirx < 0) {
//       col = this.map.getCol(left);
//       this.x = this.width / 2 + this.map.getX(col + 1);
//     }
//   }
// }
