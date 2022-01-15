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

  getPokemonForm(): Observable<any> {
    return this.http.get(``)
  }
}
