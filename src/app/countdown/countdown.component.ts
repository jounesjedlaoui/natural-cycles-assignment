import { Component, HostListener, Input, AfterViewInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

import { Countdown } from '../types/countdown';
import { TextService } from '../services/text.service';

/**
 * This is the component displaying and handling the Title and Countdown.
 */

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.sass',
})
export class CountdownComponent {
  /**
   * TextService provides functionality to affect the display of Text-Elements in the DOM.
   * In this case **resizeText()** is used to fit text to the screen-width.
   */
  textService!: TextService;
  /**
   * RxJS Interval Reference that gets executed every second to update **currentTimeToCountdown**.
   */
  tick: Observable<number> = interval(1000);
  /**
   * RxJS Subscription that allows a method to be called on every tick.
   */
  subscribe?: Subscription;

  /**
   * Human-readable String showing the time remaining to the Countdown-Date.
   */
  currentTimeToCountdown: String = '';

  /**
   * @Public property Gets passed from the parent and set in the Setter Method of the same name.
   */
  public _activeCountdown!: Countdown;
  /**
   * @Input Setter Method: Everytime the Countdown to be displayed is changed by the parent. Set it as **_activeCountDown** and update the View.
   */
  @Input() set activeCountdown(value: Countdown) {
    this._activeCountdown = value;
    // Update the Countdown-String
    this.renderCountdownString();

    // Resize the text only AFTER the innerText has changed.
    setTimeout(() => this.updateView(), 100);
  }

  constructor(textService: TextService) {
    // set own TextService Reference
    this.textService = textService;
  }

  /**
   * Called after Component has been loaded and fully initialized. Resizes text-elements for the first time and sets up the interval.
   */
  ngAfterViewInit() {
    this.updateView();
    // Update Countdown-String every second (everytime **tick** gets executed)
    this.subscribe = this.tick.subscribe(() => this.renderCountdownString());
  }

  /**
   * EventHandler for window-resize Event. Updates the text-elements when triggered.
   */
  @HostListener('window:resize')
  onResize() {
    this.updateView();
  }

  /**
   * Update String displaying the time until the Countdown-Timestamp in the format: 'XX days, XX h, XX m, XX s'
   */
  renderCountdownString() {
    let now = Date.now();
    let timeString = '';

    // Calculate time left to Countdown Timestamp
    let diff = this._activeCountdown.timestamp - now;

    // If Countdown-Timestamp is in the past. Display Message.
    if (diff < 0) {
      timeString = 'Countdown finished! 🎉';
    } else {
      // Time constants
      const oneDay = 24 * 60 * 60 * 1000;
      const oneHour = 60 * 60 * 1000;
      const oneMinute = 60 * 1000;
      const oneSecond = 1000;

      // Calculate the difference in days, hours, minutes, and seconds.
      // Only display entry if value is > 0.
      let days = Math.floor(diff / oneDay);
      timeString += days > 0 ? `${days} days, ` : '';
      diff %= oneDay;

      let hours = Math.floor(diff / oneHour);
      timeString += hours > 0 ? `${hours} h, ` : '';
      diff %= oneHour;

      let minutes = Math.floor(diff / oneMinute);
      timeString += minutes > 0 ? `${minutes} m, ` : '';
      diff %= oneMinute;

      let seconds = Math.floor(diff / oneSecond);
      timeString += `${seconds} s`;
    }

    // Resize countdown element if length of string has changed
    if (this.currentTimeToCountdown.length !== timeString.length) {
      this.textService.resizeText('countdown_p');
    }
    // Construct the result string
    this.currentTimeToCountdown = `${timeString}`;
  }

  /**
   * Resize the Header and Countdown Text. Gets called on window-resize and when the component is initialized.
   */
  updateView() {
    this.textService.resizeText('countdown_title');
    this.textService.resizeText('countdown_p');
  }
}
