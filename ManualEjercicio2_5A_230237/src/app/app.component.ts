import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';  // Para enrutamiento
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Asegúrate de que FormsModule esté importado

// Importar los componentes autónomos
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { ContentComponent } from './components/content/content.component';
import { Practica1Component } from './practicas/practica1/practica1.component'; // Verifica que esta ruta sea correcta
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    CommonModule,
    FormsModule,  // Asegúrate de que FormsModule está aquí
    NavbarComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,
    PageContainerComponent,
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
    Practica12Component  // Importa el componente de ejercicio1 (puedes agregar más ejercicios aquí)
  ]
})
export class AppComponent {
  title = 'ManualEjercicio2_5A_230237';
  showMainContent = true;
  showNavbar = true;
  showContent = false;
  ejercicioSeleccionado: string = '';  // Variable para almacenar el ejercicio seleccionado

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
    this.ejercicioSeleccionado = ejercicio;
  }
}