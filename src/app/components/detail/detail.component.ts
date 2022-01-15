import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPokemonDetail(1).subscribe((data) => {
      console.log(data);
    })
  }

}
