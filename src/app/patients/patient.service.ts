import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Patient } from './patient.model';
import { Observable } from 'rxjs/Rx';
import { environment as env } from '../../environments/environment'

@Injectable()
export class PatientService {

  constructor(private http:Http) { }

  savePatientInfo(patient){
    const body=patient;
    const token= localStorage.getItem('token') ? localStorage.getItem('token') :''
    const headers= new Headers({'Content-Type':'application/json','x-auth': token})
    return this.http.patch(env.DOMAIN + '/patients/me',body, {headers})
      .map((res:Response)=>res.json())
      .catch((error:Response)=>Observable.throw(error.json()))
  }

  updatePassword(passwordObj){
    const body=passwordObj;
    const token= localStorage.getItem('token') ? localStorage.getItem('token') :''
    const headers= new Headers({'Content-Type':'application/json','x-auth': token})
    return this.http.patch(env.DOMAIN + '/patients/me/password',body, {headers})
      .map((res:Response)=>res.json())
      .catch((error:Response)=>Observable.throw(error.json()))
  }

}
