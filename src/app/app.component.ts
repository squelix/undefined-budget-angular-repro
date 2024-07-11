import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgClass, ToggleComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'petit-dej-tech-tailwindcss';

  isDarkMode = signal(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  switchMode(event: any) {
    this.isDarkMode.set(event.target.checked);
  }
}
