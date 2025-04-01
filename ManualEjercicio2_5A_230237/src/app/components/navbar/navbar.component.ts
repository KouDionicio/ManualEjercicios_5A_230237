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
  @Output() tablaSeleccionada = new EventEmitter<string>();  // Emitir la tabla seleccionada
  @Output() graficaSeleccionada = new EventEmitter<string>();

  dropdownOpen = false;
  showEjercicios = false;
  dropdownTablasOpen = false;  // Nueva propiedad para el dropdown de Tablas
  ejercicios = Array.from({ length: 12 }, (_, i) => `Ejercicio ${i + 1}`);
  tablas = ['Basica', 'Anime', 'JSON', 'AJAX', 'Gráfica', 'Gráfica Estática', 'Gráfica JSON', 'Gráfica Ajax'];  // Lista de tablas

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

  // En navbar.component.ts
  mostrarTabla(tabla: string) {
    if (tabla.includes('Gráfica')) {
      this.graficaSeleccionada.emit(tabla);
    } else {
      this.tablaSeleccionada.emit(tabla);
    }
  }

  // Alternar la visibilidad del dropdown de Tablas
  toggleTablasDropdown() {
    this.dropdownTablasOpen = !this.dropdownTablasOpen;
  }

  mostrarGrafica(grafica: string) {
    console.log("Gráfica seleccionada: ", grafica);  // Esto te ayudará a verificar que el valor se está emitiendo
    this.graficaSeleccionada.emit(grafica);
  }

}
