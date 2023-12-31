import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthenticationService) { }

  logout(): void {
    this.authService.logout()
      .then(() => {
        // Cerrar sesión exitosamente
      })
      .catch(error => {
        // Mostrar mensaje de error en el cierre de sesión
      });
  }
}
