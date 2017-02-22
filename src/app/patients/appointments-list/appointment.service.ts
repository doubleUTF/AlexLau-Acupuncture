import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs';
import * as moment from 'moment';
import 'rxjs/Rx';

@Injectable()
export class AppointmentService {

  constructor(private http:Http) { }

  getAppointments(){
    var token=localStorage.getItem('token')
    const headers=new Headers({
      'Content-Type':'application/json',
      'x-auth':token
    })
    return this.http.get('http://localhost:3000/patients/appointments', {headers})
      .map((res:Response)=>res.json())
      .catch((error:Response)=>Observable.throw(error.json()))
  }

  formatTime(date:Date){
    return moment(date).format('dddd, MMMM Do YYYY, h:mm a')
  }
}
