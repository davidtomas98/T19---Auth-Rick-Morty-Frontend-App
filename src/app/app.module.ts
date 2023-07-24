import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RandomCharactersComponent } from './random-characters/random-characters.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterFormComponent } from './character-form/character-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'random-characters', component: RandomCharactersComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'character-detail/:id', component: CharacterDetailComponent },
  { path: 'character-form', component: CharacterFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RandomCharactersComponent,
    AboutUsComponent,
    CharacterDetailComponent,
    CharacterFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
