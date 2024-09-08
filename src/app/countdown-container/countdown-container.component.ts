import { Component } from '@angular/core';
import { createCountdownComponent } from '../createCountdown/createCountdown.component';
import { CountdownComponent } from '../countdown/countdown.component';
import { CommonModule } from '@angular/common';
import { Countdown } from '../types/countdown';

@Component({
  selector: 'app-countdown-container',
  standalone: true,
  imports: [createCountdownComponent, CountdownComponent, CommonModule],
  templateUrl: './countdown-container.component.html',
  styleUrl: './countdown-container.component.sass',
})
/**
 *
 */
export class CountdownContainerComponent {
  savedCD!: Countdown;

  /**
   * Creates and saves new Countdown to be displayed
   * @param countdown newly added countdown
   */
  createNewCountdown(countdown: Countdown) {
    let cd: Countdown = {
      name: countdown.name,
      timestamp: Date.parse(String(countdown.timestamp!)),
    };
    this.savedCD = cd;
    localStorage.setItem('countdown', JSON.stringify(countdown));
  }

  ngOnInit() {
    /**
     * @returns String representing the Date to set the countdown to, if none have been set by the user. Defaults to closest 21.07.
     */
    function generateNextMidsommar(): string {
      let d = new Date();
      let year =
        d.getMonth() <= 6 && d.getDay() < 21
          ? d.getFullYear()
          : d.getFullYear() + 1;
      let initialDate = new Date(year, 5, 21);

      return JSON.stringify({ name: 'Midsommar Eve', timestamp: initialDate });
    }

    let scd = localStorage.getItem('countdown') ?? generateNextMidsommar();
    console.log('Countdown with values ' + scd + ' found in Preferences');

    // convert the initial or previously saved Countdown to a POJO and store it to pass to createCountdown and Countdown Components as props.
    var json = JSON.parse(scd);
    this.savedCD = {
      name: json.name,
      timestamp: Date.parse(json.timestamp),
    };
  }
}
