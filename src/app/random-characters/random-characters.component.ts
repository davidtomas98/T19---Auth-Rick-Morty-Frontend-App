import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Component({
  selector: 'app-random-characters',
  templateUrl: './random-characters.component.html',
  styleUrls: ['./random-characters.component.css']
})
export class RandomCharactersComponent implements OnInit {
  characters: any[] = [];

  constructor(private apiService: RickAndMortyService) {}

  ngOnInit() {
    this.fetchRandomCharacters();
  }

  fetchRandomCharacters() {
    this.apiService.getCharacters().subscribe(
      (response) => {
        const totalCharacters = response.results.length;
        const randomIndexes = this.generateRandomIndexes(totalCharacters);
        this.characters = randomIndexes.map(index => response.results[index]);
        console.log('Random characters loaded successfully:', this.characters);
      },
      (error) => {
        console.error('Error loading random characters:', error);
      }
    );
  }
  
  generateRandomIndexes(totalCharacters: number): number[] {
    const indexes: number[] = [];
    while (indexes.length < 20) {
      const randomIndex = Math.floor(Math.random() * totalCharacters);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  }
  
  
}
