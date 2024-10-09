import { Component, inject, signal, ViewChild } from '@angular/core';

import { ChartComponent, NgApexchartsModule, ApexOptions } from 'ng-apexcharts';

import { ThemeService } from '../../../theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrl: './basic.component.scss',
  standalone: true,
  imports: [NgApexchartsModule],
})
export class BasicComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ApexOptions>;
  private themeService = inject(ThemeService);

  subscription: Subscription | undefined;
  dark = signal<'light' | 'dark'>('light');

  ngAfterViewInit(): void {
    this.subscription = this.themeService.getDark().subscribe((val) => {
      this.dark.set(val);
      this.chart.updateOptions({
        tooltip: {
          theme: this.dark(), // 更新工具提示的主題
        },
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Desktops',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    };
  }
}
