import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RickAndMortyService } from '../services/rick-and-morty.service';
import * as faker from 'faker';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {
  characterForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: RickAndMortyService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.characterForm = this.formBuilder.group({
      name: [faker.name.firstName(), Validators.required],
      status: [faker.random.arrayElement(['Alive', 'Dead', 'Unknown']), Validators.required],
      species: [faker.random.word(), Validators.required],
      gender: [faker.random.arrayElement(['Male', 'Female', 'Other']), Validators.required],
      originName: [faker.address.city(), Validators.required],
      locationName: [faker.address.city(), Validators.required],
      image: [faker.image.avatar(), Validators.required]
    });
  }

  createCharacter(): void {
    if (this.characterForm.valid) {
      const characterData = {
        id: faker.datatype.number(),
        name: this.characterForm.value.name,
        status: this.characterForm.value.status,
        species: this.characterForm.value.species,
        gender: this.characterForm.value.gender,
        origin:  this.characterForm.value.originName,
        location:  this.characterForm.value.locationName,
        image: this.characterForm.value.image,
      };

      this.apiService.createCharacter(characterData).subscribe(
        (response) => {
          console.log('Character created successfully:', response);
          // Mostrar mensaje de éxito
          alert('Character created successfully!');
          // Reiniciar el formulario
          this.characterForm.reset();
        },
        (error) => {
          console.error('Error creating character:', error);
          // Mostrar mensaje de error al usuario
          alert('Error creating character. Please try again.');
        }
      );
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
      // Mostrar mensaje de error al usuario
      alert('Please fill in all required fields.');
    }
  }
}
