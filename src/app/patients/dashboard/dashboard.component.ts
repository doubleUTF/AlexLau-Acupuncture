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
  // FIXED: AuthService now uses AsyncSubject and waits for dashboard component
  // to call complete() so now appointments array is properly emitted.
  constructor(private authService:AuthService) {}

  ngOnInit() {
    this.authService.upcomingAppointments.complete();
    this.authService.upcomingAppointments.subscribe(
      appointments=>console.log(appointments),
      err=>console.error(err)
    )
  }

  // TODO: Now that we properly receive appointments on dashboard, it's time to implement
  // the front-end to display a proper alert message to inform user of upcoming appointment.
}
