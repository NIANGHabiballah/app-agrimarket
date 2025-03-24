import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import {ContactComponent} from './contact/contact.component';
import {AproposComponent} from './apropos/apropos.component';
import {ProduitsComponent} from './produits/produits.component';
import { PaiementComponent } from './paiement/paiement.component';
import { DetailsproduitsComponent } from './detailsproduits/detailsproduits.component'; // Importez le composant autonome

export const appRoutes: Routes = [
  { path: '', component: AccueilComponent },  // Route par défaut pour afficher AccueilComponent
  { path: 'accueil', component: AccueilComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'paiement', component: PaiementComponent },
  { path: 'detailsproduits', component: DetailsproduitsComponent} // Route par défaut pour afficher Accueil
];
