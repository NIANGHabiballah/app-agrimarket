import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../accueil/footer/footer.component";

@Component({
  selector: 'app-apropos',
  imports: [NavComponent, FooterComponent],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent {

}
