import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  private limit = 50;
  private offset = 0;

  constructor(private http: HttpClient) {}

  getListPokemones(): Observable<any> {
    return this.http.get(`${this.apiUrl}?limit=${this.limit}&offset=${this.offset}`);
  }

  getDetailPokemones(urlPokemon: string): Observable<any> {
    console.log("Llamando API para obtener detalles:", urlPokemon); 
    return this.http.get(urlPokemon);
  }  
}
