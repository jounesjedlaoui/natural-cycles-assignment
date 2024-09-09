import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CountdownContainerComponent } from './countdown-container/countdown-container.component';

/**
 * This is the base component in which the Countdown-Components are anchored.
 * Its purpose is to eventually host other components too, so that the Countdown-Components can be handled independently of the root-Component
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountdownContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {}
