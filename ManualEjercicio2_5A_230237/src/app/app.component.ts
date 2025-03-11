import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Para enrutamiento
import { MatButtonModule } from '@angular/material/button';

// Importar los componentes autónomos
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageContainerComponent } from './components/page-container/page-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Marca el componente raíz como autónomo
  imports: [
    RouterOutlet,  // Necesario para el enrutamiento
    MatButtonModule,  // Importa otros módulos que necesites
    NavbarComponent,  // Importa los componentes autónomos
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,
    PageContainerComponent,
  ]
})
export class AppComponent {
  title = 'ManualEjercicio2_5A_230237';
}
