import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations: any;

  constructor(
    private http: HttpClient,
    private reservationService: ReservationService) {

  }

  ngOnInit() {
    this.http.get('http://localhost:3000/reservations').subscribe((response) => {
      this.reservations = response;
      console.log(response);
      
    })
  }

  delete(reservation) {
    this.reservationService.delete(reservation.reservation_id).subscribe((response) => {
      console.log(response);
    })
    console.log(reservation);
    
  }
}
