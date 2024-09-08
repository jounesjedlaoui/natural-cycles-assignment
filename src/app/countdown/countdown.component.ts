import { Component, HostListener, Input, AfterViewInit, SimpleChanges, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';

import { interval, Observable, Subscription, timestamp } from 'rxjs';

import { Countdown } from '../types/countdown';


@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.sass'
})
export class CountdownComponent {
  // @Input() activeCountdown!: Countdown

  public _activeCountdown!: Countdown
  @Input() set activeCountdown(value: Countdown)  {
    this._activeCountdown = value;
    console.log('in Setter: ', this._activeCountdown.name)
    this.renderCountdownString()
    // Resize the text AFTER the innerText has changed.
    setTimeout(() => this.updateView(), 100)
  }

  currentTimeToCountdown: String = ''

  tick: Observable<number> = interval(1000);
  subscribe?: Subscription;

  renderCountdownString() {
    let now = Date.now()
    let timeString = '';

    let diff = this._activeCountdown.timestamp - now

    if(diff < 0) {
      timeString = 'Countdown finished! 🎉'
    }
    else {

      // Time constants
      const oneDay = 24 * 60 * 60 * 1000;
      const oneHour = 60 * 60 * 1000;
      const oneMinute = 60 * 1000;
      const oneSecond = 1000;

      // Calculate the difference in days, hours, minutes, and seconds
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
      timeString +=  `${seconds} s`; 
  }

    // Resize countdown element if length of string has changed
    if(this.currentTimeToCountdown.length !== timeString.length) {
      this.resizeText('countdown_p')
    }
    // Construct the result string
    this.currentTimeToCountdown = `${timeString}`;

  }

  resizeText(id: string) {
    let element = document.getElementById(id)
    let elementDimensions = element?.getBoundingClientRect()

    const innerWidth = window.innerWidth
    let widthRatio = innerWidth/elementDimensions!.width

    let targetHeight = elementDimensions!.height * widthRatio

    console.log('in Resize TXT ' + id, element?.innerText,this._activeCountdown)
    
    element!.style.fontSize = `${targetHeight*.6}px`
  }

  updateView() {
    this.resizeText('countdown_title') 
    this.resizeText('countdown_p') 
  }

  ngAfterViewInit() {
    console.log('INIT', this.currentTimeToCountdown)
    this.updateView()
    this.subscribe =  this.tick.subscribe(() => this.renderCountdownString())
  }

  @HostListener('window:resize')
    onResize() {
      this.updateView()
    }
  
}