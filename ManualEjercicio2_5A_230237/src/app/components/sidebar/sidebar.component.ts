import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';  // Para usar *ngIf, *ngFor, etc.
import { EjercicioService } from '../../ejercicio.service'; // Asegúrate de que la ruta sea correcta
import { ChangeDetectorRef } from '@angular/core';

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

  constructor(private ejercicioService: EjercicioService,  private cdr: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Cambios en Sidebar:", changes);
    
    if (changes['ejercicioSeleccionado']) {
      this.actualizarInformacionEjercicio();
    }
    if (changes['tablaSeleccionada']) {
      this.actualizarInformacionTabla();
    }
    if (changes['graficaSeleccionada']) {
      this.actualizarInformacionGrafica();
    }
  
    console.log("Cambios detectados en Sidebar:", changes);
    this.cdr.detectChanges();
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
    console.log("Gráfica seleccionada en Sidebar:", this.graficaSeleccionada);
    if (this.graficaSeleccionada) {
      const info = this.ejercicioService.getGraficaInfo(this.graficaSeleccionada);
      if (info) {
        this.titulo = info.titulo;
        this.unidad = info.unidad;
        this.descripcion = info.descripcion;
        this.objetivo = info.objetivo;
      } else {
        console.error("No se encontró información para:", this.graficaSeleccionada);
      }
    }
  }
  
}
