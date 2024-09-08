import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {AngularFittextModule} from 'angular-fittext';
import { countdownReducer } from './state/countdown.reducer';

import { routes } from './app.routes';
import { provideStore, StoreModule } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(), AngularFittextModule],
};
