import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router'; 
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css',
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class ProduitsComponent implements OnInit {

  modalInstance: any;

  ngOnInit(): void {
    const modalElement = document.getElementById('offreModal');
    if (modalElement) {
      this.modalInstance = new bootstrap.Modal(modalElement);
    }
  }

  openModal() {
    if (this.modalInstance) {
      this.modalInstance.show();
    }
  }
}
