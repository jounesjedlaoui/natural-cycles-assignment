import { createReducer, on } from '@ngrx/store';

import { addCountdown } from './countdown.actions';
import { Countdown } from '../countdown';

export const initialState: Countdown = {id: 0, name: 'Midsommar', timestamp: 1393977600};

export const countdownReducer = createReducer(
  initialState,
  on(addCountdown, (state, countdown) => state = countdown),//   on(countdownActions.removeCountdown, (_state, { countdown }) => _state.filter((cd: Countdown) => cd !== countdown))
);