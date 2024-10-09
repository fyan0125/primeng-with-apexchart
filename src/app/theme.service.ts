import { ChangeDetectorRef, effect, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeLinkElement: HTMLLinkElement;
  private dark$ = new BehaviorSubject<'light' | 'dark'>('light');

  constructor() {
    this.themeLinkElement = document.createElement('link');
    this.themeLinkElement.rel = 'stylesheet';
    this.themeLinkElement.href = `lara-light-blue/theme.css`;
    document.head.appendChild(this.themeLinkElement);
  }

  setDark(value: 'light' | 'dark' | undefined) {
    this.dark$.next(value ?? 'light');
    this.themeLinkElement.href = `lara-${value}-blue/theme.css`;
  }

  getDark() {
    return this.dark$.asObservable();
  }

  listenToThemeChanges(chart: any, cdr: ChangeDetectorRef) {
    this.dark$.subscribe((theme) => {
      chart.tooltip = {
        ...chart.tooltip,
        theme: theme,
      };
      cdr.detectChanges();
    });
  }
}
