import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importa FormsModule aquí

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  standalone: true,
  imports: [FormsModule]  // Asegúrate de importar FormsModule aquí
})
export class ContentComponent {
  @Output() contentLoaded = new EventEmitter<void>();  // Emitir evento cuando el contenido se haya cargado

  // Propiedades para el formulario de login
  username = '';
  password = '';

  onLoadContent() {
    if (this.username && this.password) {
      this.contentLoaded.emit();  // Emitir evento si las credenciales son correctas
    } else {
      alert("Por favor ingrese un nombre de usuario y una contraseña.");
    }
  }
}
