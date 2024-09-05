import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { addCountdown } from '../state/countdown.actions';
import { Store } from '@ngrx/store';
import { addIcons } from "ionicons";
import { Countdown } from '../countdown';

@Component({
  selector: 'app-create-countdown',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './createCountdown.component.html',
  styleUrl: './createCountdown.component.sass'
})
export class createCountdownComponent {
  countdownForm = new FormGroup({
    name: new FormControl('',  {nonNullable: true}),
    timestamp: new FormControl('', {nonNullable: true}),
  });
  constructor(private store: Store<Countdown>) {
      
  }

  createCountdown() {
    console.log('hey ', this.countdownForm)
    let cd: Countdown = {id: 0, name: this.countdownForm.value.name!, timestamp:  Date.parse(this.countdownForm.value.timestamp!)}
    this.store.dispatch(addCountdown(cd))
    console.log(this.store)
    localStorage.setItem('countdown', JSON.stringify(this.countdownForm.value))
  }
}
