import { Component, Input } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';

import { Countdown } from '../countdown';
import { addIcons } from "ionicons";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [ CommonModule, AsyncPipe ],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.sass'
})
export class CountdownComponent {
  @Input() activeCountdown!: Countdown
  aCD$: Observable<Countdown>

  constructor(private store: Store<{countdown: Countdown}>) {
    this.aCD$ = store.select('countdown')

    this.aCD$.subscribe({
      next:  data => {
      console.log('something changed ', data)
      }
    })
    console.log(this.aCD$)
  }
   resetCountdown() {
    console.log(this.aCD$)

   }
}