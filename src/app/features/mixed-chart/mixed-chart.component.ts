import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MultipleYAxisComponent } from './multiple-y-axis/multiple-y-axis.component';
import { LineColumnAreaComponent } from './line-column-area/line-column-area.component';

@Component({
  selector: 'app-mixed-chart',
  templateUrl: './mixed-chart.component.html',
  styleUrls: ['./mixed-chart.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    DropdownModule,
    MultipleYAxisComponent,
    LineColumnAreaComponent,
  ],
})
export class MixedChartComponent {
  types: string[] = ['Multiple Y-Axis', 'Line Column Area'];

  selectedType: string | undefined = this.types[0];
}
