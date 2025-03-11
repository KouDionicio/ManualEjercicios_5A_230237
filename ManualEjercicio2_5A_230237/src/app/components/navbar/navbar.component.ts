import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule]
})
export class NavbarComponent {
  @Output() logout = new EventEmitter<void>();  // Emitir evento para el logout
  dropdownOpen = false;  // Estado para controlar el menú desplegable

  // Llamar al método para "Cerrar sesión"
  onLogout() {
    this.logout.emit();  // Emitir el evento de logout
  }

  // Alternar la visibilidad del dropdown
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
