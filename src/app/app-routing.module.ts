import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RandomCharactersComponent } from './random-characters/random-characters.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterFormComponent } from './character-form/character-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard'; // Importar el Guard de autenticación

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'random-characters', component: RandomCharactersComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'character-detail/:id', component: CharacterDetailComponent },
  { path: 'character-form', component: CharacterFormComponent, canActivate: [AuthGuard] }, // Proteger esta ruta con el Guard de autenticación
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
