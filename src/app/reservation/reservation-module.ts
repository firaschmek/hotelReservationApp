import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reservation } from './reservation';
import { ReservationForm } from '../reservation-form/reservation-form';
import { ReservationList } from '../reservation-list/reservation-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Reservation,
    ReservationForm,
    ReservationList
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ReservationModule { }
