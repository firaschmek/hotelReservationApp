import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation-service';

@Component({
  selector: 'app-reservation-form',
  standalone: false,
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.css',
})
export class ReservationForm implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private reservationService: ReservationService
  ) {

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]

    })

  }

  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation= this.reservationForm.value;
      this.reservationService.addReservation(reservation);
     }
  }
}
