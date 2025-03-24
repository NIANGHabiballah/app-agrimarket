import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes'; // Import des routes
import { AppComponent } from './app/app.component'; // Import du composant principal autonome

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes)], // Fournir les routes à l'application
})
  .catch(err => console.error(err));
