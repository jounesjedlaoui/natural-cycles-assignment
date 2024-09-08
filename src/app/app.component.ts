import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { createCountdownComponent } from "./createCountdown/createCountdown.component";
import { addIcons } from "ionicons";
import { CountdownComponent } from './countdown/countdown.component';
import { Countdown } from './types/countdown';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  createCountdownComponent, CountdownComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit{
  title = 'Countdown App';
  savedCD!: Countdown;

  /**
   * 
   * @param countdown newly added countdown
   */  
  createNewCountdown(countdown: Countdown) {
    this.savedCD = countdown;
  }

  ngOnInit() {
    let scd = localStorage.getItem('countdown') ?? JSON.stringify({id: 1, name: "now", timestamp: new Date()})
    console.log('Countdown with values ' + scd + " found in Prefs")
    if(scd) {
      var json = JSON.parse(scd)
      this.savedCD =  {
        id: 1,
        name: json.name,
        timestamp: Date.parse(json.timestamp)
      } 

    }
  }
}
