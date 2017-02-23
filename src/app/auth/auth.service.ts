import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms'; // Just for validating email
import { isEmail } from 'validator';
import 'rxjs/Rx';

import { Patient } from '../patients/patient.model';

@Injectable()
export class AuthService {

  constructor(private http:Http) { }
  register(patient:Patient){
    const body=JSON.stringify(patient);
    const headers= new Headers({'Content-Type':'application/json'})
    return this.http.post('http://localhost:3000/patients/register', body, {headers})
      .map((res:Response)=>res.json())
      .catch((error:Response)=>Observable.throw(error))
  }

  signIn(patient:Patient){
    const body=JSON.stringify(patient);
    const headers= new Headers({'Content-Type':'application/json'})
    return this.http.post('http://localhost:3000/patients/signin',body, {headers})
      .map((res:Response)=>res.json())
      .catch((error:Response)=>Observable.throw(error.json()))
  }

  validateEmail(c:FormControl){
    return isEmail(c.value) ? null :{
      validateEmail:{
        valid:false
      }
    };
  }

  signOut(){
    const token= localStorage.getItem('token') ? localStorage.getItem('token') :''
    const headers= new Headers({'Content-Type':'application/json','x-auth': token})
    return this.http.delete('http://localhost:3000/patients/token', {headers})
      .map((res:Response)=>res.json())
      .catch((error:Response)=>Observable.throw(error.json()))
  }

  isLoggedIn(){
    return localStorage.getItem('token') !==null;
  }

  getPatientInfo(){
    const token= localStorage.getItem('token') ? localStorage.getItem('token') :''
    const headers= new Headers({'Content-Type':'application/json','x-auth': token})
    return this.http.get('http://localhost:3000/patients/me', {headers})
      .map((res:Response)=>res.json())
      .catch((error:Response)=>Observable.throw(error.json()))
  }
}
