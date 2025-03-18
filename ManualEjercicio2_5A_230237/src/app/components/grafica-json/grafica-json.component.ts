import { Component, AfterViewInit } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-grafica-json',
  templateUrl: './grafica-json.component.html',
  styleUrls: ['./grafica-json.component.css']
})
export class GraficaJsonComponent implements AfterViewInit {

  // Datos en formato JSON (pueden venir de una API, archivo, etc.)
  chartData = [
    { "country": "USA", "year2004": 3.5, "year2005": 4.2 },
    { "country": "UK", "year2004": 1.7, "year2005": 3.1 },
    { "country": "Canada", "year2004": 2.8, "year2005": 2.9 },
    { "country": "Japan", "year2004": 2.6, "year2005": 2.3 },
    { "country": "France", "year2004": 1.4, "year2005": 2.1 },
    { "country": "Brazil", "year2004": 2.6, "year2005": 4.9 }
  ];

  constructor() { }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    // Crear el elemento raíz (gráfico)
    let root = am5.Root.new("chartjson");

    // Establecer temas (corregido aquí)
    root.setThemes([am5themes_Animated.new(root)]);

    // Crear el gráfico
    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      paddingLeft: 0,
      layout: root.verticalLayout
    }));

    // Añadir barra de desplazamiento
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));

    // Crear ejes
    let xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 70,
      minorGridEnabled: true
    });

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "country",
      renderer: xRenderer,
      tooltip: am5.Tooltip.new(root, {
        themeTags: ["axis"],
        animationDuration: 200
      })
    }));

    xRenderer.grid.template.setAll({
      location: 1
    });

    xAxis.data.setAll(this.chartData); // Usar los datos JSON cargados

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      min: 0,
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));

    // Añadir la serie para 2004
    let series0 = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Income",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "year2004",
      categoryXField: "country",
      clustered: false,
      tooltip: am5.Tooltip.new(root, {
        labelText: "2004: {valueY}"
      })
    }));

    series0.columns.template.setAll({
      width: am5.percent(80),
      tooltipY: 0,
      strokeOpacity: 0
    });

    series0.data.setAll(this.chartData); // Usar los datos JSON cargados

    // Añadir la serie para 2005
    let series1 = chart.series.push(am5xy.ColumnSeries.new(root, {
      name: "Income",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "year2005",
      categoryXField: "country",
      clustered: false,
      tooltip: am5.Tooltip.new(root, {
        labelText: "2005: {valueY}"
      })
    }));

    series1.columns.template.setAll({
      width: am5.percent(50),
      tooltipY: 0,
      strokeOpacity: 0
    });

    series1.data.setAll(this.chartData); // Usar los datos JSON cargados

    // Añadir cursor
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));

    // Animación de carga
    chart.appear(1000, 100);
    series0.appear();
    series1.appear();
  }
}
