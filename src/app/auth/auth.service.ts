import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms'; // Just for validating email
import { Subject } from 'rxjs/Subject'
import { map } from 'rxjs/operator/map';
import { Router } from '@angular/router';
import { Patient } from '../patients/patient.model';

@Injectable()
export class AuthService {

  private nameSource= new Subject();

  name$=this.nameSource.asObservable();
  emitName(nameArray:Array<string>){
    this.nameSource.next(nameArray)
  }

  private upcomingAppointments=new Subject()

  upcomingAppointments$=this.upcomingAppointments.asObservable();
  emitUpcomingAppointments(appointmentsArray:Array<any>){
    this.upcomingAppointments.next(appointmentsArray)
  }

  constructor(private http:Http, private router:Router) { }

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

  signOut(){
    const token= localStorage.getItem('token') ? localStorage.getItem('token') :''
    const headers= new Headers({'Content-Type':'application/json','x-auth': token})
    this.http.delete('http://localhost:3000/patients/token', {headers})
      .map((res:Response)=>res.json())
      .catch((error:Response)=>Observable.throw(error.json()))
      .subscribe((data)=>{
        console.log('Signing out')
        localStorage.clear();
        this.router.navigate(['/patients','signin'])
      },
        (err)=>{
          localStorage.clear();
          this.router.navigate(['/patients','signin'])
        })
  }

  isLoggedIn():Observable<boolean>{
    const token= localStorage.getItem('token') ? localStorage.getItem('token') :''
    const headers= new Headers({'Content-Type':'application/json','x-auth': token})
    return this.http.get('http://localhost:3000/patients/auth',{headers})
      .map(response=>response.json())
      .catch((error:Response)=>Observable.throw(error.json()))
  }

  getPatientInfo(){
    const token= localStorage.getItem('token') ? localStorage.getItem('token') :''
    const headers= new Headers({'Content-Type':'application/json','x-auth': token})
    return this.http.get('http://localhost:3000/patients/me', {headers})
      .map((res:Response)=>res.json())
      .catch((error:Response)=>Observable.throw(error.json()))
  }

}
