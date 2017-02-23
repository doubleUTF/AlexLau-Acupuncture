import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private authService:AuthService) { }

  private currentPatient;
  isReady=false;
  acuityURL=environment.ACUITY_URL;

  ngOnInit() {
    this.authService.getPatientInfo().subscribe(
      data=>{
        this.currentPatient=data.patientInfo
        this.acuityURL+=`?owner=${environment.ACUITY_USER_ID}&appointmentType=${environment.ACUITY_APPT_TYPE}&firstName=${this.currentPatient.firstName}&lastName=${this.currentPatient.lastName}&email=${this.currentPatient.email}&field:2606533=${this.currentPatient._id}`
        this.isReady=true;
      },
      err=>console.error(err)
    )

  }


}
