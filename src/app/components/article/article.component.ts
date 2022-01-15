import { newArray } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PokemonSchema } from 'src/shared/interfaces';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() pokemonName: string = '';
  @Input() pokemonUrl: string = '';
  imagePokemon: string = '';
  
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
    const favItems = localStorage.getItem('favItems') ?? '';
    console.log(JSON.parse(favItems))
    const arrFav = [];
    const newPokemonn: PokemonSchema = {
      name: this.pokemonName,
      url: this.pokemonUrl,
    }
    arrFav.push(newPokemonn);
    localStorage.setItem('favItems', JSON.stringify(arrFav));
  }
}
