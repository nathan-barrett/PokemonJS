export class Map {

  constructor(
    public tileSize: number,
    public atlas: string, //path to tileset image?
    public cols: number,
    public rows: number,
    public tileGrid: number[]
    ){}
}
