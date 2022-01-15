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
  empty: boolean = false;

  constructor() { }

  ngOnInit(): void {
    const favItems = JSON.parse(localStorage.getItem('favItems') ?? '');
    this.isEmpty(favItems);
    this.data.next(favItems);
  }

  deleteFav(event: number): void {
    const arr = this.data.getValue();
    arr.splice(event, 1);
    this.data.next(arr);
    this.isEmpty(arr);
    localStorage.setItem('favItems', JSON.stringify(arr));
  }

  isEmpty(favItems: any): void {
    if (favItems.length === 0) {
      this.empty = true;
    }
  }
}
