import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme = false;

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    this.updateTheme();
  }

  private updateTheme(): void {
    const body = document.getElementsByTagName('body')[0];
    if (this.isDarkTheme) {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  }

  isDark(): boolean {
    return this.isDarkTheme;
  }
}
