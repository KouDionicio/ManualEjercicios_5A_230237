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
    ContentComponent
  ]
})

export class AppComponent {
  title = 'ManualEjercicio2_5A_230237';
  showMainContent = true;  // Mostrar contenido principal por defecto
  showNavbar = true;  // Controlar la visibilidad del navbar
  showContent = false;  // Controlar si se muestra el componente de contenido (login)

  // Método que se llama cuando el usuario hace clic en "Cerrar sesión"
  onLogout() {
    this.showMainContent = false;  // Ocultar el contenido principal
    this.showNavbar = false;  // Ocultar el navbar
    this.showContent = true;  // Mostrar el componente de contenido (login)
  }

  // Método que se llama cuando el usuario "inicia sesión" o hace alguna acción
  onShowContent() {
    this.showMainContent = true;  // Mostrar el contenido principal
    this.showNavbar = true;  // Mostrar el navbar
    this.showContent = false;  // Ocultar el componente de contenido (login)
  }
}
