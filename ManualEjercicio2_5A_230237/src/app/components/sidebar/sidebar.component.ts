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
  @Input() tablaSeleccionada: string = '';
  @Input() graficaSeleccionada: string = '';

  titulo: string = '';
  unidad: string = '';
  descripcion: string = '';
  objetivo: string = '';

  constructor(private ejercicioService: EjercicioService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['ejercicioSeleccionado']) {
      this.actualizarInformacionEjercicio();
    }
    if (changes['tablaSeleccionada']) {
      this.actualizarInformacionTabla();
    }
    console.log("Cambios detectados en Sidebar:", changes);  // Verifica todos los cambios
    if (changes['graficaSeleccionada'] && this.graficaSeleccionada) {
      this.actualizarInformacionGrafica();
    }
  }

  actualizarInformacionEjercicio() {
    const info = this.ejercicioService.getEjercicioInfo(this.ejercicioSeleccionado);
    this.titulo = info.titulo;
    this.unidad = info.unidad;
    this.descripcion = info.descripcion;
    this.objetivo = info.objetivo;
  }

  actualizarInformacionTabla() {
    const info = this.ejercicioService.getTablaInfo(this.tablaSeleccionada);
    this.titulo = info.titulo;
    this.unidad = info.unidad;
    this.descripcion = info.descripcion;
    this.objetivo = info.objetivo;
  }

  actualizarInformacionGrafica() {
    console.log("Gráfica seleccionada en Sidebar:", this.graficaSeleccionada);  // Depuración
    const info = this.ejercicioService.getGraficaInfo(this.graficaSeleccionada);
    console.log("Información de la gráfica:", info);  // Verifica la información que se recibe
    if (info) {
      this.titulo = info.titulo;
      this.unidad = info.unidad;
      this.descripcion = info.descripcion;
      this.objetivo = info.objetivo;
    } else {
      console.error("No se encontró información para la gráfica seleccionada.");
    }
  }
  
}
