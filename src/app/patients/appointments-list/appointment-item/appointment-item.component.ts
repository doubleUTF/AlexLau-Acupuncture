import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment.model';

@Component({
  selector: 'appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.css']
})
export class AppointmentItemComponent implements OnInit {

  constructor(public appointmentService:AppointmentService) { }

  ngOnInit() {
  }

  @Input() viewReceipt:boolean=false;
  @Input() canCancel:boolean=false;
  @Input() appointment:Appointment;
  @Output() onCanceled=new EventEmitter();

  onCancel(id:Number){
    this.onCanceled.emit(id)
  }

}
