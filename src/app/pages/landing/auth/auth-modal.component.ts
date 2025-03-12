import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  imports: [],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss'
})
export class AuthModalComponent {
  @Output() close = new EventEmitter<void>()

  closeModal(){
    this.close.emit()
  }
  // loginWithGoogle(){

  // }
}
