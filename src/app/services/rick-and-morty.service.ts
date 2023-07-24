import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';
  private apiUrl2 = 'http://localhost:3000/characters';

  constructor(private http: HttpClient) {}

  createCharacter(characterData: any) {
    return this.http.post<any>(this.apiUrl2, characterData);
  }

  getCharacters(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
