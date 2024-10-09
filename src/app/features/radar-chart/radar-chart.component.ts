import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { BasicComponent } from './basic/basic.component';
import { MultipleSeriesComponent } from './multiple-series/multiple-series.component';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss'],
  standalone: true,
  imports: [CarouselModule, BasicComponent, MultipleSeriesComponent],
})
export class RadarChartComponent {
  list: string[] = ['Basic', 'Multiple Series'];
}
