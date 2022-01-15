import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokedex';

  ngOnInit(): void {
    if (!localStorage.getItem('favItems')) {
      localStorage.setItem('favItems', JSON.stringify([]));
    }
  }
}
