import { Component, effect, signal, Signal } from '@angular/core';
import { AuthModalComponent } from './auth/auth-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  imports: [CommonModule, AuthModalComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  isModalOpen = false
  lastScrollTop = 0
  isHeaderVisible: Signal<boolean> = signal(true)


  constructor() {
    effect(() => {
      window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        this.isHeaderVisible.set(scrollTop < this.lastScrollTop);
        this.lastScrollTop = scrollTop;
      });
    });
  }

  openModal() {
    this.isModalOpen = true
  }
  
  closeModal() {
    this.isModalOpen = false;
  }
}
