import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>', // Utilisation de <router-outlet> pour rendre les routes
  standalone: true,
  imports: [
    RouterOutlet
  ],
  // Ce composant est également autonome
})
export class AppComponent {

}
