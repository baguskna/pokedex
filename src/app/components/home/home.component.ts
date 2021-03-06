import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { BehaviorSubject, map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { FILTER_DATA } from 'src/shared/constant';
import { PokemonSchema } from 'src/shared/interfaces';

const NUMBER_POKEMON = 24;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data = new BehaviorSubject<PokemonSchema[]>([]);
  dataFilter = FILTER_DATA;
  filter: string = 'All';
  isLoading: boolean = false;
  onFilter = false;
  private limit = NUMBER_POKEMON;
  private offset = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  onScroll(): void {
    if (this.onFilter) return;
    this.offset += NUMBER_POKEMON;
    this.limit += NUMBER_POKEMON;
    this.getPokemon();
  }

  getPokemon(): void {
    this.isLoading = true;
    this.apiService.getPokemon(this.offset, this.limit).subscribe((data) => {
      const newPokemon: PokemonSchema[] = data.results;
      // Clear the data if on filter state.
      const currentPokemon = this.onFilter ? [] : this.data.getValue();
      this.data.next(currentPokemon.concat(newPokemon));
      this.onFilter = false;
      this.isLoading = false;
    });
  }

  change(event: MatSelectChange): void {
    if (!event.value) { // stop function if user chooses all.
      this.offset = 0;
      this.limit = 300;
      this.getPokemon();
      this.filter = 'All';
      return;
    }
    this.onFilter = true;
    this.filter = event.value;
    this.apiService.getPokemonByFilter(event.value)
      .pipe(map(pokemon => {
        return pokemon.pokemon.map((nested: any) => {
          return nested.pokemon;
        });
      }))
      .subscribe((data: PokemonSchema[]) => {
        this.data.next(data);
      });
  }
}
