import { Component, OnInit, ViewChild } from '@angular/core';
import { AppointmentService } from './appointment.service';
import { ModalModule, ModalDirective } from 'ng2-bootstrap/modal';

@Component({
  selector: 'appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {

  constructor(private appointmentService:AppointmentService) { }

  appointments=[]
  appointment={}
  @ViewChild('staticModal') public staticModal:ModalDirective;
  ngOnInit() {
    this.appointmentService.getAppointments()
      .subscribe(
        data=>this.appointments=data.appointments,
        err=>console.error(err)
      )
  }

  onCanceled(appointment){
    // console.log(appointment)
    this.appointment=appointment
    this.staticModal.show()
  }

  confirmCancel(id:Number){
    this.appointmentService.cancelAppointment(id)
      .subscribe(
        data=>{
          this.appointmentService.getAppointments()
            .subscribe(
              data=>this.appointments=data.appointments,
              err=>console.error(err)
            )
          this.staticModal.hide()
        },
        err=>console.error(err)
      )
  }
}
