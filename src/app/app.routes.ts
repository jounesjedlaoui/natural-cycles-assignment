import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'natural-cyles-assignment', component: AppComponent },
    { path: '', redirectTo: 'natural-cycles-assignment', pathMatch: 'full' }
];
