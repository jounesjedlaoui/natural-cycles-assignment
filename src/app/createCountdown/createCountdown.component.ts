import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Countdown } from '../types/countdown';
import { FormError } from '../types/formError';

@Component({
  selector: 'app-create-countdown',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './createCountdown.component.html',
  styleUrl: './createCountdown.component.sass',
})
export class createCountdownComponent {
  // initial Countdown to be shown in name input.
  @Input() initialCountdown!: Countdown;

  // Emitted event to pass newly created Countdown to parent.
  @Output() createNewCountdown = new EventEmitter<Countdown>();

  // Contains form inputs to set a new Countdown
  countdownForm!: FormGroup;

  // One Boolean for every Input-Field. Used for conditional CSS-class to highlight input-errors.
  errors: FormError = {
    name: false,
    timestamp: false,
  };

  /**
   * Initiate FormGroup with prop values after the Component has been initialized
   */
  ngOnInit() {
    this.countdownForm = new FormGroup({
      name: new FormControl(this.initialCountdown.name, [
        Validators.required,
        Validators.minLength(1),
      ]),
      timestamp: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  /**
   * Use form inputs to set a new countdown.
   * Pass the countdown to parent Component to store and pass it to the Countdown Component for displaying
   * Handle Errors, so that the corresponding Input-Element will be highlighted if no valid input was given.
   */
  createCountdown() {
    if (this.countdownForm.valid) {
      // Emit creation to parent
      this.createNewCountdown.emit(this.countdownForm.value);

      // Reset Error state.
      this.errors = {
        name: false,
        timestamp: false,
      };
    } else {
      // Set corresponding error states so that 'error'-Class will be conditionally applied to Inputs
      this.errors = {
        name: this.countdownForm.value.name.length <= 0,
        timestamp: this.countdownForm.value.timestamp.length < 10,
      };
    }
  }
}
