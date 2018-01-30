import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  constructor(private http: Http) {}

  getStarterPokemonSprite(name: string) {
    return this.http.get("http://pokeapi.co/api/v2/pokemon/" + name)
  }
}
