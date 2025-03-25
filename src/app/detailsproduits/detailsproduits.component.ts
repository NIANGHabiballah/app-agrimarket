import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-detailsproduits',
  templateUrl: './detailsproduits.component.html',
  styleUrl: './detailsproduits.component.css',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule]
})
export class DetailsproduitsComponent {

  quantity: number = 1;
  
  order() {
    alert(`Commande passée pour ${this.quantity} Ognio(s)`);
  }

  addToWishlist() {
    alert('Ajouté à votre liste de souhaits');
  }
}

