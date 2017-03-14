import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // TODO: Don't know why dashboard doesn't receive the appointments in time when
  // I refresh the browser, there is no data.
  constructor(private authService:AuthService) {
    authService.upcomingAppointments$.subscribe(
      appointments=>console.log(appointments),
      err=>console.error(err)
    ) }

  ngOnInit() {

  }

  //TODO Need to implement some sort of alert component to remind patient upon sign-in
  // of any status updates or actions required such as upcoming appointment,
  // expiring insurance info, payment requirements, server maintenance status, etc.
}
