import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly URI_API = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getPokemon(offset: number, limit: number): Observable<any> {
    return this.http.get(`${this.URI_API}pokemon?offset=${offset}&limit=${limit}`);
  }

  getPokemonDetail(id: number): Observable<any> {
    return this.http.get(`${this.URI_API}pokemon/${id}`);
  }

  getPokemonByFilter(value: string): Observable<any> {
    return this.http.get(`${this.URI_API}type/${value}`);
  }

  getPokemonImage(id: string): Observable<any> {
    return this.http.get(`${this.URI_API}pokemon-form/${id}`);
  }
}
