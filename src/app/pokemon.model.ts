export class Pokemon {
  constructor(
    public sprite: string,
    public hp: number,
    public type: string,
    public name: string
  ){}
}

export class Pokemonenemy {
  constructor (
    public sprite: string,
    public hp: number,
    public type: string,
    public name: string,
  ) {}
}
