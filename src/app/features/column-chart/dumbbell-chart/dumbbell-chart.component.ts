import { Component, inject, signal, ViewChild } from '@angular/core';

import { ChartComponent, NgApexchartsModule, ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-dumbbell-chart',
  templateUrl: './dumbbell-chart.component.html',
  styleUrls: ['./dumbbell-chart.component.scss'],
  standalone: true,
  imports: [NgApexchartsModule],
})
export class DumbbellChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ApexOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: '2008',
              y: [2800, 4500],
            },
            {
              x: '2009',
              y: [3200, 4100],
            },
            {
              x: '2010',
              y: [2950, 7800],
            },
            {
              x: '2011',
              y: [3000, 4600],
            },
            {
              x: '2012',
              y: [3500, 4100],
            },
            {
              x: '2013',
              y: [4500, 6500],
            },
            {
              x: '2014',
              y: [4100, 5600],
            },
          ],
        },
      ],
      chart: {
        height: 350,
        type: 'rangeBar',
        zoom: {
          enabled: false,
        },
      },
      plotOptions: {
        bar: {
          isDumbbell: true,
          columnWidth: 3,
          dumbbellColors: [['#008FFB', '#00E396']],
        },
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        position: 'top',
        horizontalAlign: 'left',
        customLegendItems: ['Product A', 'Product B'],
      },
      fill: {
        type: 'gradient',
        gradient: {
          type: 'vertical',
          gradientToColors: ['#00E396'],
          inverseColors: true,
          stops: [0, 100],
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      xaxis: {
        tickPlacement: 'on',
      },
    };
  }
}
