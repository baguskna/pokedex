import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { PokemonSchema } from 'src/shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data = new BehaviorSubject<PokemonSchema[]>([]);
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
    this.offset += 300;
    this.limit += 300;
    this.getPokemon();
  }

  getPokemon(): void {
    this.apiService.getPokemon(this.offset, this.limit).subscribe((data) => {
      const newPokemon = data.results;
      const currentPokemon = this.data.getValue();
      this.data.next(currentPokemon.concat(newPokemon));
    });
  }
}
