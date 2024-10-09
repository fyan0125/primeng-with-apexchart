import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

import { BasicComponent } from './basic/basic.component';
import { ZoomableTimeseriesComponent } from './zoomable-timeseries/zoomable-timeseries.component';
import { SyncingChartsComponent } from './syncing-charts/syncing-charts.component';
import { BrushChartComponent } from './brush-chart/brush-chart.component';
import { SteplineComponent } from './stepline/stepline.component';
import { GradientComponent } from './gradient/gradient.component';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss',
  standalone: true,
  imports: [
    FormsModule,
    DropdownModule,
    BasicComponent,
    ZoomableTimeseriesComponent,
    SyncingChartsComponent,
    BrushChartComponent,
    SteplineComponent,
    GradientComponent,
  ],
})
export class LineChartComponent {
  types: string[] = [
    'Basic',
    'Zoomable Timeseries',
    'Syncing charts',
    'Brush chart',
    'Stepline',
    'Gradient',
  ];

  selectedType: string | undefined = this.types[0];
}
