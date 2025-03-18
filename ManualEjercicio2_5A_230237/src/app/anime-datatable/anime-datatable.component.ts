import { Component } from '@angular/core';
import { Config } from 'datatables.net';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-anime-datatable',
  imports: [],
  templateUrl: './anime-datatable.component.html',
  styleUrl: './anime-datatable.component.css'
})
export class AnimeDatatableComponent {
  dtOptions: Config = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',  // Paginación: Si
      pageLength: 5,  // Número de elementos por página: Si
      lengthMenu: [ [10, 25, 50], [10, 25, 50] ],  // Opciones para la cantidad de registros por página: Si
      searching: true,  // Habilitar la búsqueda: No comento si o no
      ordering: true,  // Habilitar la ordenación: Si
      order: [[1, 'asc']],  // Ordenar por la segunda columna (Anime Name) en orden ascendente: Si
      info: true,  // Mostrar la información de la paginación: Si  // Desactivar la responsividad: No
      language: {//Language:Español: Si
        search: 'Buscar:', 
        lengthMenu: 'Mostrar _MENU_ registros por página',  // Texto para la selección de registros por página
        paginate: {
          first: 'Primera',  
          last: 'Última',  
          next: 'Siguiente',  
          previous: 'Anterior',  
        },
        info: 'Mostrando _START_ a _END_ de _TOTAL_ registros',  
        infoEmpty: 'No hay registros disponibles',  
        infoFiltered: '(filtrado de _MAX_ registros)',  
      },
    };
  }
}
