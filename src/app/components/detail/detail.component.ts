import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  id: string = '';
  name: string = '';
  picture: string = '';

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '1';
    this.apiService.getPokemonDetail(+this.id).subscribe((data) => {
      console.log(data);
      this.name = data.name;
      this.picture = data.sprites.front_default;
    });
  }

}
