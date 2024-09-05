import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { createCountdownComponent } from "./createCountdown/createCountdown.component";
import { addIcons } from "ionicons";
import { CountdownComponent } from './countdown/countdown.component';
import { Countdown } from './countdown';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addCountdown } from './state/countdown.actions';
// import { AppModule } from './app.module';


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

  constructor(private store: Store<{countdown: Countdown}>) {
    console.log(store.select('countdown'))
  }

  ngOnInit() {
    let scd = localStorage.getItem('countdown')
    console.log('Countdown with values ' + scd + " found in Prefs")
    if(scd) {
      var json = JSON.parse(scd)
      this.savedCD =  {
        id: 1,
        name: json.name,
        timestamp: Date.parse(json.timestamp)
      } 

      this.store.dispatch(addCountdown(this.savedCD))

    }
  }
}
