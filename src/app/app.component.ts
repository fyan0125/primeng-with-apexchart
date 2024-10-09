import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { InputSwitchModule } from 'primeng/inputswitch';

import { ThemeService } from './theme.service';
import { LineChartComponent } from './features/line-chart/line-chart.component';
import { AreaChartComponent } from './features/area-chart/area-chart.component';
import { ColumnChartComponent } from './features/column-chart/column-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    FormsModule,
    MenubarModule,
    InputSwitchModule,
    LineChartComponent,
    AreaChartComponent,
    ColumnChartComponent,
  ],
})
export class AppComponent {
  public themeService = inject(ThemeService);
  public dark: 'light' | 'dark' | undefined = 'light';
}
