import { Component } from '@angular/core';
import { AuthModalComponent } from './auth/auth-modal.component';

@Component({
  selector: 'app-landing',
  imports: [AuthModalComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  isModalOpen = false

  openModal() {
    this.isModalOpen = true
  }
  
  closeModal() {
    this.isModalOpen = false;
  }
}
