import { NgModule } from "@angular/core";
import { countdownReducer } from "./state/countdown.reducer";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { CountdownComponent } from "./countdown/countdown.component";
import { createCountdownComponent } from "./createCountdown/createCountdown.component";

@NgModule({
    imports: [
        AppComponent, CountdownComponent, createCountdownComponent,
        StoreModule.forRoot({ countdown: countdownReducer}),
    ],
  })
  export class AppModule {}