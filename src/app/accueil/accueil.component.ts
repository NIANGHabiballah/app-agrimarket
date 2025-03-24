import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router'; // Importation du module commun de base

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  standalone: true,  // Déclare le composant comme autonome
  imports: [CommonModule, RouterLink],  // Importation de CommonModule pour utiliser des directives comme `ngIf`, `ngFor`
})
export class AccueilComponent {}
