import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule]
})
export class NavbarComponent {
  @Output() logout = new EventEmitter<void>();
  @Output() ejercicioSeleccionado = new EventEmitter<string>();  // Emitir el ejercicio seleccionado
  dropdownOpen = false;
  showEjercicios = false;
  dropdownTablasOpen = false;  // Nueva propiedad para el dropdown de Tablas
  ejercicios = Array.from({ length: 12 }, (_, i) => `Ejercicio ${i + 1}`);

  // Llamar al método para "Cerrar sesión"
  onLogout() {
    this.logout.emit();
  }

  // Alternar la visibilidad del dropdown de usuario
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  // Alternar la visibilidad de la lista de ejercicios
  toggleEjercicios() {
    this.showEjercicios = !this.showEjercicios;
  }

  // Emitir el ejercicio seleccionado
  mostrarEjercicio(ejercicio: string) {
    this.ejercicioSeleccionado.emit(ejercicio);
  }

  // Alternar la visibilidad del dropdown de Tablas
  toggleTablasDropdown() {
    this.dropdownTablasOpen = !this.dropdownTablasOpen;
  }
}
