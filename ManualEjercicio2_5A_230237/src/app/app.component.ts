import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
//import { PageContainerComponent } from './components/page-container/page-container.component';
import { ContentComponent } from './components/content/content.component';
import { Practica1Component } from './practicas/practica1/practica1.component';
import { Practica2Component } from './practicas/practica2/practica2.component';
import { Practica3Component } from './practicas/practica3/practica3.component';
import { Practica4Component } from './practicas/practica4/practica4.component';
import { Practica5Component } from './practicas/practica5/practica5.component';
import { Practica6Component } from './practicas/practica6/practica6.component';
import { Practica7Component } from './practicas/practica7/practica7.component';
import { Practica8Component } from './practicas/practica8/practica8.component';
import { Practica9Component } from './practicas/practica9/practica9.component';
import { Practica10Component } from './practicas/practica10/practica10.component';
import { Practica11Component } from './practicas/practica11/practica11.component';
import { Practica12Component } from './practicas/practica12/practica12.component';

// Importar el servicio EjercicioService
import { EjercicioService } from './ejercicio.service';
import { AjaxDatatableComponent } from './ajax-datatable/ajax-datatable.component'
import { AnimeDatatableComponent } from "./anime-datatable/anime-datatable.component";
import { BasicDatatableComponent } from "./basic-datatable/basic-datatable.component";
import { JsonDatatableComponent } from "./json-datatable/json-datatable.component";  // Asegúrate de importar el servicio

import { GraficaComponent } from './grafica/grafica.component';
import { GraficaEstaticaComponent } from './grafica-estatica/grafica-estatica.component';
import { GraficaJsonComponent } from './grafica-json/grafica-json.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    MatButtonModule,
    CommonModule,
    FormsModule,
    NavbarComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,
    ContentComponent,
    Practica1Component,
    Practica2Component,
    Practica3Component,
    Practica4Component,
    Practica5Component,
    Practica6Component,
    Practica7Component,
    Practica8Component,
    Practica9Component,
    Practica10Component,
    Practica11Component,
    Practica12Component,
    AjaxDatatableComponent,
    AnimeDatatableComponent,
    BasicDatatableComponent,
    JsonDatatableComponent,
    DataTablesModule,
    GraficaComponent,
    GraficaEstaticaComponent,
    GraficaJsonComponent
  ]
})
export class AppComponent {
  title = 'ManualEjercicio2_5A_230237';
  showMainContent = true;
  showNavbar = true;
  showContent = false;
  ejercicioSeleccionado: string | null = null;  // Variable para almacenar el ejercicio seleccionado
  tablaSeleccionada: string | null = null;
  graficaSeleccionada: string | null = null;

  constructor(private ejercicioService: EjercicioService) { }

  // Método que se llama cuando el usuario hace clic en "Cerrar sesión"
  onLogout() {
    this.showMainContent = false;
    this.showNavbar = false;
    this.showContent = true;
  }

  // Método que se llama cuando el usuario "inicia sesión" o hace alguna acción
  onShowContent() {
    this.showMainContent = true;
    this.showNavbar = true;
    this.showContent = false;
  }

  // Método que se llama cuando se selecciona un ejercicio desde el Navbar
  onEjercicioSeleccionado(ejercicio: string) {
    // Si el ejercicio seleccionado es el mismo que el actual, lo desmarcamos
    if (this.ejercicioSeleccionado === ejercicio) {
      this.ejercicioSeleccionado = '';  // Desmarcar el ejercicio
    } else {
      this.ejercicioSeleccionado = ejercicio;  // Seleccionar el nuevo ejercicio
    }
  }

  // Método para manejar la selección de tablas
  onTablaSeleccionada(tabla: string) {

    if (this.tablaSeleccionada === tabla) {
      this.tablaSeleccionada = '';
    } else {
      this.tablaSeleccionada = tabla;
      this.ejercicioSeleccionado = '';
    }
  }

  // Método para manejar la selección de gráficos
  onGraficaSeleccionada(grafica: string) {
    console.log("Gráfica seleccionada en app.component: ", grafica);
    if (this.graficaSeleccionada === grafica) {
      this.graficaSeleccionada = '';  // Desmarcar el gráfico
    } else {
      this.graficaSeleccionada = grafica;  // Seleccionar nueva gráfica
      this.tablaSeleccionada = '';      // Asegurarse de que no haya tabla seleccionada
      this.ejercicioSeleccionado = '';
    }
    console.log("Nuevo valor de graficaSeleccionada:", this.graficaSeleccionada);
  }

}