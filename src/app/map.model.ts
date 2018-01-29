export class Map {

  constructor(
    public tileSize: number, //dimension of square tile in px
    public atlas: string, //path to tileset image?
    public columns: number, //number of columns in the map grid
    public rows: number, //number of rows in the map grid
    public tileGrid: number[] //stores a numerical value for each tile in the grid
    ){}

  //input coordinates and recieve the numerical representation of that tile
  getTile(col: number, row: number){
    return this.tileGrid[row * this.columns + col];
  }
}
