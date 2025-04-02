import { Component, AfterViewInit } from '@angular/core';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

@Component({
  selector: 'app-grafica',
  standalone: true,
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements AfterViewInit {

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      this.createChart();
    }
  }

  createChart() {
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    let value = 100;

    const generateData = () => {
      value = Math.round((Math.random() * 10 - 5) + value);
      am5.time.add(date, "day", 1);
      return {
        date: date.getTime(),
        value: value
      };
    };

    const generateDatas = (count: number): { date: number, value: number }[] => {
      let data = [];
      for (let i = 0; i < count; ++i) {
        data.push(generateData());
      }
      return data;
    };

    let root = am5.Root.new("chartdiv-dynamic");
    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
      pinchZoomX: true,
      paddingLeft: 0
    }));

    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineX.set("forceHidden", true);
    cursor.lineY.set("forceHidden", true);

    let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      baseInterval: { timeUnit: "day", count: 1 },
      renderer: am5xy.AxisRendererX.new(root, { minorGridEnabled: true, minGridDistance: 80 })
    }));

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, { renderer: am5xy.AxisRendererY.new(root, {}) }));

    let series = chart.series.push(am5xy.LineSeries.new(root, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "value",
      valueXField: "date",
      tooltip: am5.Tooltip.new(root, { labelText: "{valueY}" })
    }));

    series.fills.template.setAll({
      fillOpacity: 0.2,
      visible: true
    });

    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));

    let data = generateDatas(1200);
    series.data.setAll(data);

    let rangeDate = new Date();
    am5.time.add(rangeDate, "day", Math.round(series.dataItems.length / 2));
    let rangeTime = rangeDate.getTime();

    let seriesRangeDataItem = xAxis.makeDataItem({});
    let seriesRange = series.createAxisRange(seriesRangeDataItem);

    if (seriesRange.fills && seriesRange.strokes) {
      seriesRange.fills.template.setAll({
        visible: true,
        opacity: 0.3
      });

      seriesRange.fills.template.set("fillPattern", am5.LinePattern.new(root, {
        color: am5.color(0xff0000), // Color rojo
        rotation: 45,
        strokeWidth: 2,
        width: 2000,
        height: 2000,
        fill: am5.color(0xffffff)
      }));

      seriesRange.strokes.template.set("stroke", am5.color(0xff0000));
    }

    xAxis.onPrivate("max", function (value) {
      seriesRangeDataItem.set("endValue", value);
      seriesRangeDataItem.set("value", rangeTime);
    });

    let range = xAxis.createAxisRange(xAxis.makeDataItem({}));
    let color = root.interfaceColors.get("primaryButton");

    range.set("value", rangeDate.getTime());
    const grid = range.get("grid");
    if (grid) {
      grid.setAll({
        strokeOpacity: 1,
        stroke: color
      });
    }

    let resizeButton = am5.Button.new(root, {
      themeTags: ["resize", "horizontal"],
      icon: am5.Graphics.new(root, {
        themeTags: ["icon"]
      })
    });

    resizeButton.adapters.add("y", function () {
      return 0;
    });

    const containerWidth = chart.plotContainer.width() ?? 0; // Asegura que containerWidth sea un número
    resizeButton.adapters.add("x", function (x) {
      const xNumber = typeof x === "number" ? x : 0; // Asegura que x sea un número
      return Math.max(0, Math.min(containerWidth, xNumber));
    });

    resizeButton.events.on("dragged", function () {
      let x = resizeButton.x();
      let position = xAxis.toAxisPosition(x / chart.plotContainer.width());

      let value = xAxis.positionToValue(position);

      range.set("value", value);

      seriesRangeDataItem.set("value", value);
      seriesRangeDataItem.set("endValue", xAxis.getPrivate("max"));
    });

    range.set("bullet", am5xy.AxisBullet.new(root, {
      sprite: resizeButton
    }));

    series.appear(1000);
    chart.appear(1000, 100);
  }
}