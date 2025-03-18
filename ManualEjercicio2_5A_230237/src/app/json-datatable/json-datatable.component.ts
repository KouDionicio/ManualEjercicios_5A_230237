import { Component } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-json-datatable',
  imports: [DataTablesModule],
  templateUrl: './json-datatable.component.html',
  styleUrls: ['./json-datatable.component.css']
})
export class JsonDatatableComponent {

  const tableRows = document.querySelectorAll('#mangaTable tbody tr');

    
    tableRows.forEach(row => {
      const cells = row.querySelectorAll('td');
      const mangaData = {
        id: cells[0].textContent?.trim(),
        name: cells[1].textContent?.trim(),
        chapters: cells[2].textContent?.trim(),
        volumes: cells[3].textContent?.trim(),
        author: cells[4].textContent?.trim(),
        creationDate: cells[5].textContent?.trim(),
        endDate: cells[6].textContent?.trim(),
        adaptedToAnime: cells[7].textContent?.trim(),
        type: cells[8].textContent?.trim()
      };
      this.jsonData.push(mangaData);
    });

    
    console.log('Datos extraídos en formato JSON:', this.jsonData);
  }

}
