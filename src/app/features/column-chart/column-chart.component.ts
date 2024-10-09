import { Component, OnInit } from '@angular/core';

import { CarouselModule } from 'primeng/carousel';

import { BasicComponent } from './basic/basic.component';
import { StackColumnsComponent } from './stack-columns/stack-columns.component';
import { StackedColumns100Component } from './stacked-columns-100/stacked-columns-100.component';
import { GroupedStackedColumnsComponent } from './grouped-stacked-columns/grouped-stacked-columns.component';
import { DumbbellChartComponent } from './dumbbell-chart/dumbbell-chart.component';
import { ColumnWithMarkersComponent } from './column-with-markers/column-with-markers.component';
import { ColumnWithNegativeValuesComponent } from './column-with-negative-values/column-with-negative-values.component';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrl: './column-chart.component.scss',
  standalone: true,
  imports: [
    CarouselModule,
    BasicComponent,
    StackColumnsComponent,
    StackedColumns100Component,
    GroupedStackedColumnsComponent,
    DumbbellChartComponent,
    ColumnWithMarkersComponent,
    ColumnWithNegativeValuesComponent,
  ],
})
export class ColumnChartComponent {
  list: string[] = [
    'Basic',
    'Stacked Columns',
    'Stacked Columns 100',
    'Grouped Stacked Columns',
    'Dumbbell Chart',
    'Column with Markers',
    'Column with Negative Values',
  ];
}
