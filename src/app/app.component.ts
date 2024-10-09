import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { Message, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';

import { ThemeService } from './theme.service';
import { LineChartComponent } from './features/line-chart/line-chart.component';
import { AreaChartComponent } from './features/area-chart/area-chart.component';
import { ColumnChartComponent } from './features/column-chart/column-chart.component';
import { MixedChartComponent } from './features/mixed-chart/mixed-chart.component';
import { PieChartComponent } from './features/pie-chart/pie-chart.component';
import { RadarChartComponent } from './features/radar-chart/radar-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    FormsModule,
    MenubarModule,
    InputSwitchModule,
    CardModule,
    LineChartComponent,
    AreaChartComponent,
    ColumnChartComponent,
    ToastModule,
    MixedChartComponent,
    PieChartComponent,
    RadarChartComponent,
  ],
  providers: [MessageService],
})
export class AppComponent {
  public themeService = inject(ThemeService);
  public dark: 'light' | 'dark' | undefined = 'light';
  public messageService = inject(MessageService);

  changeTheme() {
    this.themeService.setDark(this.dark);
    this.messageService.add({
      severity: 'info',
      detail: `根據主題變更Line Chart - Basic的Tooltip : ${this.dark} Mode`,
    });
  }

  show() {
    console.log('show');
  }
}
