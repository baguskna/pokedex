import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { BehaviorSubject, map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { FILTER_DATA } from 'src/shared/constant';
import { PokemonSchema } from 'src/shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data = new BehaviorSubject<PokemonSchema[]>([]);
  dataFilter = FILTER_DATA;
  onFilter = false;
  private offset = 0;
  private limit = 300;
  
  constructor(private apiService: ApiService) { }
  
  ngOnInit(): void {
    this.getPokemon();
  }
  
  getImagePokemon(url: string): string {
    const index = url.split('/');
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index[6]}.png`;
  }

  onScroll(): void {
    if (this.onFilter) return;
    this.offset += 300;
    this.limit += 300;
    this.getPokemon();
  }

  getPokemon(): void {
    this.apiService.getPokemon(this.offset, this.limit).subscribe((data) => {
      const newPokemon = data.results;
      // Clear the data if on filter state.
      const currentPokemon = this.onFilter ? [] : this.data.getValue();
      this.data.next(currentPokemon.concat(newPokemon));
      this.onFilter = false;
    });
  }

  change(event: MatSelectChange): void {
    if (!event.value) { // stop function if user chooses clear.
      this.offset = 0;
      this.limit = 300;
      this.getPokemon();
      return;
    }
    this.onFilter = true;
    this.apiService.getPokemonByFilter(event.value)
      .pipe(map(pokemon => {
        return pokemon.pokemon.map((nested: any) => {
          return nested.pokemon;
        })
      }))
      .subscribe((data) => {
        this.data.next(data);
      });
  }
}
