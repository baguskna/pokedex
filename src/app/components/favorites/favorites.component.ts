import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PokemonSchema } from 'src/shared/interfaces';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  data = new BehaviorSubject<PokemonSchema[]>([]);

  constructor() { }

  ngOnInit(): void {
    const favItems = JSON.parse(localStorage.getItem('favItems') ?? '');
    this.data.next(favItems);
  }

  deleteFav(event: number): void {
    console.log(event)
    const arr = this.data.getValue();
    arr.splice(event, 1);
    this.data.next(arr);
    localStorage.setItem('favItems', JSON.stringify(arr));
  }
}
