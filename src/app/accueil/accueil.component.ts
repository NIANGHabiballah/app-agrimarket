import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterModule} from '@angular/router';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "./footer/footer.component"; // Importation du module commun de base

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  standalone: true,  // Déclare le composant comme autonome
  imports: [CommonModule, RouterModule, NavComponent, FooterComponent],  // Importation de CommonModule pour utiliser des directives comme `ngIf`, `ngFor`
})
export class AccueilComponent {}
