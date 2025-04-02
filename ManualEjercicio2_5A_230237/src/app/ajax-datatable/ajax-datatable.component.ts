import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ajax-datatable',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './ajax-datatable.component.html',
  styleUrls: ['./ajax-datatable.component.css']
})
export class AjaxDatatableComponent implements OnInit, OnDestroy {
  private apiUrl = 'http://localhost:3000/api/datos';
  private refreshInterval: any;
  private http = inject(HttpClient);

  data: any[] = [];
  currentDate = new Date();

  ngOnInit(): void {
    this.loadData();
    this.refreshInterval = setInterval(() => this.loadData(), 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.refreshInterval);
  }

  loadData(): void {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (error) => {
        console.error('Error al cargar datos:', error);
      }
    });
  }
} 