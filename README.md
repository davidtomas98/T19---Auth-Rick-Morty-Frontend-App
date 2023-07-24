
## Componentes

El proyecto cuenta con varios componentes que son utilizados para crear las diferentes páginas y secciones de la aplicación:

- `AboutUsComponent`: Página que muestra información sobre nosotros.
- `CharacterDetailComponent`: Página que muestra los detalles de un personaje de Rick & Morty.
- `CharacterFormComponent`: Página para agregar un nuevo personaje de Rick & Morty.
- `HomeComponent`: Página de inicio de la aplicación.
- `LoginComponent`: Página de inicio de sesión.
- `NavbarComponent`: Componente que muestra la barra de navegación con enlaces y opciones de autenticación.
- `RandomCharactersComponent`: Página que muestra personajes aleatorios de Rick & Morty.
- `RegisterComponent`: Página de registro de usuario.

## Servicios

El proyecto cuenta con dos servicios:

- `AuthenticationService`: Servicio para manejar la autenticación de usuarios utilizando Firebase.
- `CharacterService`: Servicio para obtener y gestionar los personajes de Rick & Morty.

## Rutas y Guards

Las rutas de la aplicación están definidas en el archivo `app-routing.module.ts`. También hemos implementado un Guard de autenticación llamado `AuthGuard` para proteger rutas específicas que requieren que el usuario esté autenticado.

## Instrucciones de inicio

1. Clona el repositorio.
2. Ejecuta `npm install` para instalar las dependencias.
3. Configura la conexión a tu proyecto de Firebase en el archivo `environment.ts`.
4. Ejecuta `ng serve` para iniciar el servidor de desarrollo. Navega a `http://localhost:4200/` para ver la aplicación en funcionamiento.

¡Espero que esta información te sea útil! Si tienes alguna otra pregunta o necesitas más ayuda, no dudes en preguntar. ¡Buena suerte con tu proyecto de Rick & Morty!
