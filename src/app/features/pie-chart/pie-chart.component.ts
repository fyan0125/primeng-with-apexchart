import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { SimplePieComponent } from './simple-pie/simple-pie.component';
import { SimpleDonutComponent } from './simple-donut/simple-donut.component';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  standalone: true,
  imports: [CarouselModule, SimplePieComponent, SimpleDonutComponent],
})
export class PieChartComponent {
  list: string[] = ['Simple Pie', 'Simple Donut'];
}
