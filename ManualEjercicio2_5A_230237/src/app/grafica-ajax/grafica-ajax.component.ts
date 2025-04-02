import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { DatePipe } from '@angular/common'; // Importa DatePipe

@Component({
  selector: 'app-grafica-ajax',
  standalone: true,
  templateUrl: './grafica-ajax.component.html',
  styleUrls: ['./grafica-ajax.component.css'],
  imports: [CommonModule, DatePipe] // Añade los imports necesarios
})
export class GraficaAjaxComponent implements OnInit, OnDestroy {
  private chart: any;
  private apiUrl = 'http://localhost:3000/api/datos';
  private refreshInterval: any;
  private http = inject(HttpClient);
  
  currentDate: Date = new Date(); // Añade esta propiedad

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.loadData();
    this.refreshInterval = setInterval(() => this.loadData(), 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.refreshInterval);
    this.chart?.destroy();
  }

  loadData(): void {
    this.currentDate = new Date(); // Actualiza la fecha con cada carga
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.updateChart(data);
      },
      error: (error) => {
        console.error('Error al cargar datos:', error);
      }
    });
  }

  updateChart(data: any[]): void {
    const ctx = document.getElementById('miGrafica') as HTMLCanvasElement;
    
    this.chart?.destroy();
  
    const labels = data.map(d => d.nombre || `Dato ${d.id}`);
    const values = data.map(d => d.valor || 0);
  
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Valores',
          data: values,
          backgroundColor: 'rgba(255, 105, 180, 0.7)',
          borderColor: 'rgba(255, 105, 180, 1)',
          borderWidth: 2,
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: '#1e1e1e',
            titleColor: '#82b1ff',
            bodyColor: '#fff',
            borderColor: '#5c6bc0',
            borderWidth: 1
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#a5d6a7'
            }
          },
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)'
            },
            ticks: {
              color: '#82b1ff'
            }
          }
        }
      }
    });
  }
}