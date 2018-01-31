export class Map {

  constructor(
    public tileSize: number, //dimension of square tile in px
    // public atlas: string, //location of tileset image
    public columns: number, //number of columns in the map grid
    public rows: number, //number of rows in the map grid
    public tileGrid: number[] //stores a numerical value for each tile in the grid
    ){}

  //input coordinates and recieve the numerical representation of that tile
  getTile(col: number, row: number){
    return this.tileGrid[row * this.columns + col];
  }

  isSolidTileAtXY(x: number, y: number){
    let col = Math.floor(x / this.tileSize);
    let row = Math.floor(y / this.tileSize);

    // 1 tiles are solid, 0 tiles are walkable
    let tile = this.getTile(col, row);
    return (tile === 1);
  }

  getCol(x: number) {
    return Math.floor(x / this.tileSize);
  }

  getRow(y: number) {
    return Math.floor(y / this.tileSize);
  }

  getX(col: number){
    return col * this.tileSize;
  }

  getY(row: number){
    return row * this.tileSize;
  }
}
