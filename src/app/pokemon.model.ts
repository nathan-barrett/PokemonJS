export class Pokemon {
  constructor(
    public sprite: string,
    public hp: number,
    public currentHp: number,
    public type: string,
    public name: string,
    public moves: string[],
  ){}
}

export class Pokemonenemy {
  level: number;
  constructor (
    public sprite: string,
    public hp: number,
    public currentHp: number,
    public type: string,
    public name: string,
    public moves: string[],
  ) {}
}
