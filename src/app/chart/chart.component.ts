import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  Highcharts = Highcharts;
  chartOptions = {}

  constructor() {
    this.chartOptions = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Activities conducted for students on previous year',
          align: 'left'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            borderRadius: 5,
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
              distance: -50,
              filter: {
                property: 'percentage',
                operator: '>',
                value: 4
              }
            }
          }
        },
        series: [{
          name: 'Share',
          data: [
            { name: 'Academic', y: 74 },
            { name: 'Arts', y: 8.66 },
            { name: 'Sports', y: 4.96 },
            { name: 'IV', y: 2.49 },
            { name: 'Club Activities', y: 6.492 },
            { name: 'Other', y: 3.398 }
          ]
        }]
      }
      HC_exporting(Highcharts)
    }
}
