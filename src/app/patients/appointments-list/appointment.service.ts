import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs';
import * as moment from 'moment';
import 'rxjs/Rx';
import {environment} from '../../../environments/environment';

@Injectable()
export class AppointmentService {

  constructor(private http:Http) { }

  // This gets all appointments, need to reconfigure to
  // only retrieve upcoming appointments

  getAppointments(){
    var token=localStorage.getItem('token')
    const headers=new Headers({
      'Content-Type':'application/json',
      'x-auth':token
    })
    return this.http.get(`${environment.DOMAIN}/patients/appointments`, {headers})
      .map((res:Response)=>res.json())
      .catch((error:Response)=>Observable.throw(error.json()))
  }

  cancelAppointment(id:Number){
    var token=localStorage.getItem('token')
    const headers=new Headers({
      'Content-Type':'application/json',
      'x-auth':token
    })
    return this.http.delete(`${environment.DOMAIN}/patients/appointments/${id}`,
    {headers})
      .map((res:Response)=>res.json())
      .catch((error:Response)=>Observable.throw(error.json()))
  }

  formatTime(date:Date){
    return moment(date).format('dddd, MMMM Do YYYY, h:mm a')
  }
}
