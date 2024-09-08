import { createAction, createActionGroup, props } from "@ngrx/store";
import { Countdown } from "../types/countdown";

// export const countdownActions = createActionGroup({
//     source: 'Countdown',
//     events: {
//       'addCountdown': props<{ countdown: Countdown }>(),
//       'Remove Countdown': props<{ countdown: Countdown }>(),
//     },
//   });

export const addCountdown = createAction('[createCountdown Component] addCountdown',  props<Countdown>());