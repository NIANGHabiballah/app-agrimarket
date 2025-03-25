import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, RouterModule, NavComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    nom: string = '';
    email: string = '';
    message: string = '';
  
    envoyerMessage() {
      if (this.nom && this.email && this.message) {
        alert(`Merci ${this.nom}, votre message a été envoyé avec succès !`);
        this.nom = '';
        this.email = '';
        this.message = '';
      } else {
        alert("Veuillez remplir tous les champs du formulaire.");
      }
    }
}
