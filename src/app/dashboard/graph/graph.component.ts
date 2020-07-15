import { Component, OnInit, NgZone } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {
  private chart: am4charts.XYChart;
  private chart2: am4charts.XYChart;
  
  constructor(private zone: NgZone) {}

  ngOnInit(): void {
   
  }
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.XYChart);

      chart.paddingRight = 20;

      let data = [];
      let visits = 10;
      for (let i = 1; i < 366; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
      }

      chart.data = data;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";

      series.tooltipText = "{valueY.value}";
      chart.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

      this.chart = chart;
    });
    this.zone.runOutsideAngular(()=>{
      let chart2 = am4core.create("chartdiv2", am4charts.XYChart);
      chart2.paddingRight = 20;
      chart2.data = [{
        "country": "Lithuania",
        "litres": 501.9,
        "units": 250
      }, {
        "country": "Czech Republic",
        "litres": 301.9,
        "units": 222
      }, {
        "country": "Ireland",
        "litres": 201.1,
        "units": 170
      }, {
        "country": "Germany",
        "litres": 165.8,
        "units": 122
      }, {
        "country": "Australia",
        "litres": 139.9,
        "units": 99
      }, {
        "country": "Austria",
        "litres": 128.3,
        "units": 85
      }, {
        "country": "UK",
        "litres": 99,
        "units": 93
      }, {
        "country": "Belgium",
        "litres": 60,
        "units": 50
      }, {
        "country": "The Netherlands",
        "litres": 50,
        "units": 42
      }];
      
      // Create axes
      var categoryAxis = chart2.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "country";
      categoryAxis.title.text = "Countries";
      
      var  valueAxis = chart2.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = "Litres sold (M)";
      
      // Create series
      var series = chart2.series.push(new am4charts.ColumnSeries3D());
      series.dataFields.valueY = "litres";
      series.dataFields.categoryX = "country";
      series.name = "Sales";
      series.tooltipText = "{name}: [bold]{valueY}[/]";
      
      var series2 = chart2.series.push(new am4charts.ColumnSeries3D());
      series2.dataFields.valueY = "units";
      series2.dataFields.categoryX = "country";
      series2.name = "Units";
      series2.tooltipText = "{name}: [bold]{valueY}[/]";
      
      // Add cursor
      chart2.cursor = new am4charts.XYCursor();
    });

    this.zone.runOutsideAngular(()=>{
      let chart4 = am4core.create("chartdiv4", am4charts.PieChart);
      chart4.paddingRight = 20;
      chart4.fill = am4core.color("orange");
      chart4.data = [{
        "country": "Lithuania",
        "litres": 501.9
      }, {
        "country": "Czech Republic",
        "litres": 301.9
      }, {
        "country": "Ireland",
        "litres": 201.1
      }, {
        "country": "Germany",
        "litres": 165.8
      }, {
        "country": "Australia",
        "litres": 139.9
      }, {
        "country": "Austria",
        "litres": 128.3
      }, {
        "country": "UK",
        "litres": 99
      }, {
        "country": "Belgium",
        "litres": 60
      }, {
        "country": "The Netherlands",
        "litres": 50
      }];
      
      // Add and configure Series
      var pieSeries = chart4.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country";
    });
    this.zone.runOutsideAngular(()=>{
      let chart3 = am4core.create("chartdiv3", am4charts.PieChart);
      chart3.paddingRight = 20;
      chart3.data = [{
        "country": "Lithuania",
        "litres": 501.9
      }, {
        "country": "Czech Republic",
        "litres": 301.9
      }, {
        "country": "Ireland",
        "litres": 201.1
      }, {
        "country": "Germany",
        "litres": 165.8
      }, {
        "country": "Australia",
        "litres": 139.9
      }, {
        "country": "Austria",
        "litres": 128.3
      }, {
        "country": "UK",
        "litres": 99,
        "hidden": true
      }, {
        "country": "Belgium",
        "litres": 60,
        "hidden": true
      }, {
        "country": "The Netherlands",
        "litres": 50,
        "hidden": true
      }];
      
      // Add and configure Series
      var pieSeries = chart3.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country";
      pieSeries.dataFields.hidden = "hidden";
      
      // Let's cut a hole in our Pie chart the size of 40% the radius
      chart3.innerRadius = am4core.percent(40);
      
      // Disable ticks and labels
      pieSeries.labels.template.disabled = true;
      pieSeries.ticks.template.disabled = true;
      
      // Disable tooltips
      pieSeries.slices.template.tooltipText = "";
      
      // Add a legend
      chart3.legend = new am4charts.Legend();
      chart3.legend.position = "right";
    });
    this.zone.runOutsideAngular(()=>{
      let chart5 = am4core.create("chartdiv5", am4charts.XYChart);
      chart5.paddingRight = 20;
      chart5.data = [{
        "category": "Research",
        "value1": 450,
        "value2": 1200,
        "value3": 960,
        "value4": 710,
        "value5": 900
      }, {
        "category": "Marketing",
        "value1": 1200,
        "value2": 450,
        "value3": 850,
        "value4": 1250,
        "value5": 950
      }, {
        "category": "Distribution",
        "value1": 1850,
        "value2": 1700,
        "value3": 450,
        "value4": 870,
        "value5": 600
      }];
      
      // Create axes
      var categoryAxis = chart5.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "category";
      categoryAxis.renderer.grid.template.location = 0;
      //categoryAxis.renderer.minGridDistance = 30;
      
      var valueAxis = chart5.yAxes.push(new am4charts.ValueAxis());
      
      // Modify chart's colors
      chart5.colors.list = [
        am4core.color("#845EC2"),
        am4core.color("#D65DB1"),
        am4core.color("#FF6F91"),
        am4core.color("#FF9671"),
        am4core.color("#FFC75F"),
        am4core.color("#F9F871"),
      ];
      
      // Create series
      function createSeries(field) {
        var series = chart5.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "category";
        return series;
      }
      
      createSeries("value1");
      createSeries("value2");
      createSeries("value3");
      createSeries("value4");
      createSeries("value5");
    });
}

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}