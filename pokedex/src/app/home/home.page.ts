import { Component } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  listPokemones: any[] = [];
  selectedPokemon: any = null;

  constructor(private PokeService: PokeapiService) {}

  ngOnInit() {
    this.PokeService.getListPokemones().subscribe((data: any) => {
      this.listPokemones = data.results;
    });
  }

  handleDetail(url: any) {
    console.log("Clic detectado en Pokémon con URL:", url); 
    if (this.selectedPokemon?.url === url) {
      this.selectedPokemon = null;
    } else {
      this.PokeService.getDetailPokemones(url).subscribe((data: any) => {
        console.log("Detalles del Pokémon obtenidos:", data);
        this.selectedPokemon = data;
      });
    }
  }
  
}
