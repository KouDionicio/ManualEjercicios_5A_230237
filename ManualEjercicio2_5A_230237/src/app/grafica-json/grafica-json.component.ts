import { Component, AfterViewInit } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-grafica-json',
  templateUrl: './grafica-json.component.html',
  styleUrls: ['./grafica-json.component.css']
})
export class GraficaJsonComponent implements AfterViewInit {

  // Datos en formato JSON
  chartData = [
    { "category": "Lithuania", "value": 501 },
    { "category": "Czechia", "value": 301 },
    { "category": "Ireland", "value": 201 },
    { "category": "Germany", "value": 165 }
  ];

  chartData2 = [
    { "category": "Lithuania", "value": 201 },
    { "category": "Czechia", "value": 101 },
    { "category": "Ireland", "value": 51 },
    { "category": "Germany", "value": 15 }
  ];

  constructor() { }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    // Crear el elemento raíz (gráfico)
    let root = am5.Root.new("chartjson");

    // Establecer temas
    root.setThemes([am5themes_Animated.new(root)]);

    // Crear el contenedor para los gráficos
    let chartContainer = root.container.children.push(am5.Container.new(root, {
      layout: root.horizontalLayout,
      width: am5.p100,
      height: am5.p100
    }));

    // Crear el primer gráfico (PieChart)
    let chart1 = chartContainer.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 270,
        innerRadius: am5.percent(60)
      })
    );

    let series1 = chart1.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270,
        alignLabels: false
      })
    );

    series1.children.push(am5.Label.new(root, {
      centerX: am5.percent(50),
      centerY: am5.percent(50),
      text: "First: {valueSum}",
      populateText: true,
      fontSize: "1.5em"
    }));

    series1.slices.template.setAll({
      cornerRadius: 8
    });

    series1.states.create("hidden", {
      endAngle: -90
    });

    series1.labels.template.setAll({
      textType: "circular"
    });

    series1.data.setAll(this.chartData); // Usar los datos JSON para el primer gráfico

    // Crear el segundo gráfico (PieChart)
    let chart2 = chartContainer.children.push(
      am5percent.PieChart.new(root, {
        endAngle: 270,
        innerRadius: am5.percent(60)
      })
    );

    let series2 = chart2.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
        endAngle: 270,
        alignLabels: false,
        tooltip: am5.Tooltip.new(root, {})
      })
    );

    series2.children.push(am5.Label.new(root, {
      centerX: am5.percent(50),
      centerY: am5.percent(50),
      text: "Second: {valueSum}",
      populateText: true,
      fontSize: "1.5em"
    }));

    series2.slices.template.setAll({
      cornerRadius: 8
    });

    series2.states.create("hidden", {
      endAngle: -90
    });

    series2.labels.template.setAll({
      textType: "circular"
    });

    series2.data.setAll(this.chartData2); // Usar los datos JSON para el segundo gráfico

    // Agregar leyenda
    let legend = root.container.children.push(am5.Legend.new(root, {
      x: am5.percent(50),
      centerX: am5.percent(50),
      layout: root.horizontalLayout
    }));

    legend.data.setAll(series1.dataItems); // Usar los datos de la primera serie para la leyenda

    // Animación de carga para ambos gráficos
    chart1.appear(1000, 100);
    series1.appear();
    chart2.appear(1000, 100);
    series2.appear();
  }
}
