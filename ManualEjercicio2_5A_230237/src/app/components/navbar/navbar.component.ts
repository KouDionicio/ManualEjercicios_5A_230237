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
  @Output() ejercicioSeleccionado = new EventEmitter<string>();
  @Output() tablaSeleccionada = new EventEmitter<string | null>();  // <-- Acepta string o null
  @Output() graficaSeleccionada = new EventEmitter<string | null>(); // <-- Acepta string o null

  dropdownOpen = false;
  showEjercicios = false;
  dropdownTablasOpen = false;
  ejercicios = Array.from({ length: 12 }, (_, i) => `Ejercicio ${i + 1}`);
  
  opcionesTablas = ['Basica', 'Anime', 'JSON', 'AJAX'];
  opcionesGraficas = ['Gráfica', 'Gráfica Estática', 'Gráfica JSON', 'Gráfica Ajax'];

  onLogout() {
    this.logout.emit();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleEjercicios() {
    this.showEjercicios = !this.showEjercicios;
  }

  mostrarEjercicio(ejercicio: string) {
    this.ejercicioSeleccionado.emit(ejercicio);
  }

  toggleTablasDropdown() {
    this.dropdownTablasOpen = !this.dropdownTablasOpen;
  }

  mostrarTabla(tabla: string) {
    this.tablaSeleccionada.emit(tabla);
    this.graficaSeleccionada.emit(null); // Ahora es válido
    this.dropdownTablasOpen = false;
  }

  mostrarGrafica(grafica: string) {
    this.graficaSeleccionada.emit(grafica);
    this.tablaSeleccionada.emit(null); // Ahora es válido
    this.dropdownTablasOpen = false;
  }
}