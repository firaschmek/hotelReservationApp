import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ReservationList } from './reservation-list/reservation-list';
import { ReservationForm } from './reservation-form/reservation-form';

const routes: Routes = [
  { path: "", component: Home },
  { path: "lsit", component: ReservationList },
  { path: "new", component: ReservationForm }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
