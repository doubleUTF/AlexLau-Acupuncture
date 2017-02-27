import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ModalModule } from 'ng2-bootstrap/modal';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.css']
})
export class AppointmentItemComponent implements OnInit {

  constructor(private appointmentService:AppointmentService) { }

  ngOnInit() {
  }

  @Input() viewReceipt:boolean=false;
  @Input() canCancel:boolean=false;
  @Input() appointment:Object;
  @Output() onCanceled=new EventEmitter();

  onCancel(id:Number){
    this.onCanceled.emit(id)
  }

}
