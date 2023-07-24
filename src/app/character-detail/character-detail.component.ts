import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character: any; // Variable para almacenar los detalles del personaje

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    const characterId = this.route.snapshot.params['id']; // Obtener el ID del personaje desde la ruta
    this.fetchCharacterDetails(characterId); // Llamar a la función para obtener los detalles del personaje
  }

  fetchCharacterDetails(id: string) {
    this.http.get<any>(`https://rickandmortyapi.com/api/character/${id}`)
      .subscribe(data => {
        this.character = data; // Almacenar los detalles del personaje en la variable character
      });
  }
}
