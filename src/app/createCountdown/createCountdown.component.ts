import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';

import { Countdown } from '../types/countdown';
import { addIcons } from "ionicons";
import { FormError } from '../types/formError';

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

  @Input() initialCountdown!: Countdown;

  @Output() createNewCountdown = new EventEmitter<Countdown>();

  // displayDate: String = new Date(this.initialCountdown.timestamp)

  countdownForm!: FormGroup;

  errors: FormError = {
    name: false,
    timestamp: false
  }

  constructor() {
      this.countdownForm = new FormGroup({
        name: new FormControl('',  [Validators.required, Validators.minLength(1)]),
        timestamp: new FormControl('', [Validators.required, Validators.minLength(10)]),
      });
  }

  ngOnInit() {
    console.log('oninit', this.initialCountdown.name )
    this.countdownForm.value.name = this.initialCountdown.name
    this.countdownForm.value.timestamp = this.initialCountdown.timestamp
  }

  createCountdown() {

    if(this.countdownForm.valid) {
      
      let cd: Countdown = {id: 0, name: this.countdownForm.value.name!, timestamp:  Date.parse(this.countdownForm.value.timestamp!)}
      
      this.createNewCountdown.emit(cd)
      localStorage.setItem('countdown', JSON.stringify(this.countdownForm.value))

      this.errors = {
        name: false,
        timestamp: false
      }
    }
    else {
      this.errors = {
        name: this.countdownForm.value.name.length <= 0,
        timestamp: this.countdownForm.value.timestamp.length < 10
      }

    }
  }
}
