import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PokemonSchema } from 'src/shared/interfaces';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() index: number = 0;
  @Input() isFav: boolean = false;
  @Input() pokemonName: string = '';
  @Input() pokemonUrl: string = '';
  @Output() deleteFavorite = new EventEmitter<number>();
  imagePokemon: string = '';
  isToastVisible: boolean = false;

  get idPokemon(): string {
    const index = this.pokemonUrl.split('/');
    return index[6];
  }

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPokemonImage(this.idPokemon).subscribe((image) => {
      this.imagePokemon = image.sprites.front_default;
    });
  }


  saveFav(): void {
    const favItems = JSON.parse(localStorage.getItem('favItems') ?? '');
    const arrFav: PokemonSchema[] = [...favItems];
    const newPokemon: PokemonSchema = {
      name: this.pokemonName,
      url: this.pokemonUrl,
    }

    this.showToast();
    // Avoid duplicate fav item.
    for (const fav of arrFav) {
      if (fav.name === newPokemon.name) return;
    }

    arrFav.push(newPokemon);
    localStorage.setItem('favItems', JSON.stringify(arrFav));
  }

  showToast(): void {
    this.isToastVisible = true;

    setTimeout(() => {
      this.isToastVisible = false;
    }, 1000);
  }

  deleteFav(): void {
    this.deleteFavorite.emit(this.index);
  }
}
