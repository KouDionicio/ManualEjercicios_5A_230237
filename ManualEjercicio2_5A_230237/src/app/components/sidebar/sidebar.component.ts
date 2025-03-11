import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';  // Para usar *ngIf, *ngFor, etc.
import { EjercicioService } from '../../ejercicio.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule],  // Asegúrate de importar los módulos necesarios
})
export class SidebarComponent implements OnChanges {
  @Input() ejercicioSeleccionado: string = '';
  titulo: string = '';
  unidad: string = '';
  descripcion: string = '';
  objetivo: string = '';

  constructor(private ejercicioService: EjercicioService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['ejercicioSeleccionado']) {
      this.actualizarInformacionEjercicio();
    }
  }

  actualizarInformacionEjercicio() {
    const info = this.ejercicioService.getEjercicioInfo(this.ejercicioSeleccionado);
    this.titulo = info.titulo;
    this.unidad = info.unidad;
    this.descripcion = info.descripcion;
    this.objetivo = info.objetivo;
  }
}
