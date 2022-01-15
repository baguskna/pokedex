import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AbilitiesSchema, MoveSchema, TypeSchema } from 'src/shared/interfaces';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  abilities: AbilitiesSchema[] = [];
  id: string = '';
  moves: MoveSchema[] = [];
  name: string = '';
  picture: string = '';
  types: TypeSchema[] = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '1';
    this.apiService.getPokemonDetail(+this.id).subscribe((data) => {
      this.name = data.name;
      this.picture = data.sprites.front_default;
      this.abilities = data.abilities;
      this.moves = data.moves;
      this.types = data.types;
    });
  }

}
