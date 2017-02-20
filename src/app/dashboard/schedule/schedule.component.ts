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
        this.acuityURL+=`?owner=${environment.ACUITY_USER_ID}&firstName=${this.currentPatient.firstName}&lastName=${this.currentPatient.lastName}&email=${this.currentPatient.email}`
        this.isReady=true;
      },
      err=>console.error(err)
    )

  }


}
