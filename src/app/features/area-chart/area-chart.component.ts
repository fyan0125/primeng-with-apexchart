import { Component, output } from '@angular/core';

import { TabViewModule } from 'primeng/tabview';

import { BasicComponent } from './basic/basic.component';
import { SplineComponent } from './spline/spline.component';
import { DatetimeXAxisComponent } from './datetime-x-axis/datetime-x-axis.component';
import { StackedComponent } from './stacked/stacked.component';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrl: './area-chart.component.scss',
  standalone: true,
  imports: [
    TabViewModule,
    BasicComponent,
    SplineComponent,
    DatetimeXAxisComponent,
    StackedComponent,
  ],
})
export class AreaChartComponent {
  activeIndex: number = 1;
  change = output();
}
