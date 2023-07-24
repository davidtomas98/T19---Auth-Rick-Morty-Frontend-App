import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  // Función para iniciar sesión
  login(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  // Función para registrarse
  register(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Función para cerrar sesión
  logout(): Promise<void> {
    return this.afAuth.signOut();
  }

  // Función para verificar el estado de autenticación
  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth.onAuthStateChanged(user => {
        if (user) {
          // El usuario está autenticado
          resolve(true);
        } else {
          // El usuario no está autenticado
          resolve(false);
        }
      });
    });
  }
}
