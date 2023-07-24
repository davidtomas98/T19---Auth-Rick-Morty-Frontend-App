import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated!: boolean;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.isAuthenticated = false; // Inicializar la variable como falso por defecto

    // Verificar el estado de autenticación al cargar el componente
    this.authService.isAuthenticated()
      .then((authenticated) => {
        this.isAuthenticated = authenticated;
      });
  }

  logout(): void {
    this.authService.logout()
      .then(() => {
        // Cerrar sesión exitosamente
        this.isAuthenticated = false;
      })
      .catch(error => {
        // Mostrar mensaje de error en el cierre de sesión
      });
  }
}
