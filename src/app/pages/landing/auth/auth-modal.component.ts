import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-modal',
  imports: [],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.scss'
})
export class AuthModalComponent {
  @Output() close = new EventEmitter<void>()

/*************  ✨ Codeium Command ⭐  *************/
/******  1bb5b100-405e-4791-896e-228651392ace  *******/
  closeModal(){
    this.close.emit()
  }

  // loginWithGoogle(){

  // }
}
