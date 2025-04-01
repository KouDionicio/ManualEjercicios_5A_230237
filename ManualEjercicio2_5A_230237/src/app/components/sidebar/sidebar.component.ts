import { Component, OnChanges, Input, SimpleChanges, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjercicioService } from '../../ejercicio.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SidebarComponent implements OnChanges {
  @Input() ejercicioSeleccionado: string = '';
  @Input() tablaSeleccionada: string = '';
  @Input() graficaSeleccionada: string = '';

  // Propiedades para mostrar información
  titulo: string = '';
  unidad: string = '';
  descripcion: string = '';
  objetivo: string = '';

  // Estados para controlar "Leer más/menos"
  descripcionExpanded = false;
  objetivoExpanded = false;
  scrollActive = false;

  constructor(
    private ejercicioService: EjercicioService, 
    private cdr: ChangeDetectorRef
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['ejercicioSeleccionado']) {
      this.actualizarInformacionEjercicio();
    }
    if (changes['tablaSeleccionada']) {
      this.actualizarInformacionTabla();
    }
    if (changes['graficaSeleccionada']) {
      this.actualizarInformacionGrafica();
    }
    
    // Resetear estados al cambiar de elemento
    this.resetExpandStates();
    this.cdr.detectChanges();
  }

  actualizarInformacionEjercicio() {
    const info = this.ejercicioService.getEjercicioInfo(this.ejercicioSeleccionado);
    this.updateInfo(info);
  }

  actualizarInformacionTabla() {
    const info = this.ejercicioService.getTablaInfo(this.tablaSeleccionada);
    this.updateInfo(info);
  }

  actualizarInformacionGrafica() {
    if (!this.graficaSeleccionada) {
      this.limpiarInformacion();
      return;
    }
    const info = this.ejercicioService.getGraficaInfo(this.graficaSeleccionada);
    this.updateInfo(info);
  }

  private updateInfo(info: any) {
    this.titulo = info.titulo || '';
    this.unidad = info.unidad || '';
    this.descripcion = info.descripcion || '';
    this.objetivo = info.objetivo || '';
  }

  limpiarInformacion() {
    this.titulo = '';
    this.unidad = '';
    this.descripcion = '';
    this.objetivo = '';
    this.resetExpandStates();
  }

  // Métodos para controlar "Leer más/menos"
  toggleDescripcion() {
    this.descripcionExpanded = !this.descripcionExpanded;
  }

  toggleObjetivo() {
    this.objetivoExpanded = !this.objetivoExpanded;
  }

  private resetExpandStates() {
    this.descripcionExpanded = false;
    this.objetivoExpanded = false;
  }

  private checkScroll() {
    this.scrollActive = this.descripcionExpanded || this.objetivoExpanded;
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScroll();
  }
}