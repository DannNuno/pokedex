import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../pokeapi.service';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokedetail',
  templateUrl: 'pokedetail.component.html',
  imports: [IonicModule, CommonModule],
  styleUrls: ['pokedetail.component.scss'],
})
export class PokedetailComponent implements OnInit {
  
  pokemon: any;
  titleColor: string = 'cyan';

  constructor(private route: ActivatedRoute, private pokeService: PokeapiService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); 

    if (id) {
      this.pokeService.getPokemonById(id).subscribe(data => {
        this.pokemon = data;
        this.setTitleColor(this.pokemon.types[0]?.type?.name);
      });
    }
  }

  setTitleColor(type: string) {
    this.titleColor = this.getTypeColor(type);
  }

  getTypeColor(type: string): string {
    const typeColors: { [key: string]: string } = {
      fire: '#FF5733',
      water: '#3498db',
      grass: '#27ae60',
      electric: '#f1c40f',
      ice: '#74b9ff',
      fighting: '#d63031',
      poison: '#8e44ad',
      ground: '#e67e22',
      flying: '#a29bfe',
      psychic: '#e84393',
      bug: '#6ab04c',
      rock: '#95a5a6',
      ghost: '#4b6584',
      dragon: '#4834d4',
      dark: '#2d3436',
      steel: '#b2bec3',
      fairy: '#fab1a0',
      normal: '#dfe6e9'
    };

    return typeColors[type] || '#ffffff'; 
  }
}
