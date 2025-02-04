import { Component } from '@angular/core';
import { PokeapiService } from '../pokeapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  listPokemones:any=[];

  constructor(private pokeService: PokeapiService, private router: Router) {}

  ngOnInit(){
    this.pokeService.getListPokemones().subscribe((data)=>{
      this.listPokemones=data.results
      console.log(data.results)
    })

  }

  handleDetail(url: string) {
    const id = url.split('/').filter(part => part).pop(); // Extrae el ID del Pokémon
    this.router.navigate(['/pokemon', id]); // Redirige a la página de detalles
  }

  handleImage(item: any): string {
    if (!item.url) return 'assets/default-image.png'; // Imagen por defecto si no hay URL
  
    // Extraer el ID del Pokémon desde la URL de la API
    const id = item.url.split('/').filter((part: string) => part).pop();
    
    // Retornar la URL de la imagen desde PokéAPI
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }
  
}