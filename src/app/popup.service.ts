// src/app/popup.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  // Utilisation d'un BehaviorSubject pour émettre et suivre l'état du popup
  private popupState = new BehaviorSubject<boolean>(false);
  popupState$ = this.popupState.asObservable();

  openPopup() {
    this.popupState.next(true);  // Active le popup
  }

  closePopup() {
    this.popupState.next(false);  // Désactive le popup
  }
}
