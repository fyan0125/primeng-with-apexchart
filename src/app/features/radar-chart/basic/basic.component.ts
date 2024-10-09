import { Component, inject, signal, ViewChild } from '@angular/core';

import { ChartComponent, NgApexchartsModule, ApexOptions } from 'ng-apexcharts';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  standalone: true,
  imports: [NgApexchartsModule],
})
export class BasicComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ApexOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20],
        },
      ],
      chart: {
        height: 350,
        type: 'radar',
      },
      title: {
        text: 'Basic Radar Chart',
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June'],
      },
    };
  }
}
