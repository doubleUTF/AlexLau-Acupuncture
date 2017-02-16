import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import { isEmail } from 'validator';
import 'rxjs/Rx';

import { User } from './user.model';

@Injectable()
export class AuthService {

  constructor(private http:Http) { }
  register(user:User){
    const body=JSON.stringify(user);
    const headers= new Headers({'Content-Type':'application/json'})
    return this.http.post('http://localhost:3000/register', body, {headers})
      .map((res:Response)=>res.json())
      .catch((error:Response)=>Observable.throw(error.json()))
  }

  signIn(user:User){
    const body=JSON.stringify(user);
    const headers= new Headers({'Content-Type':'application/json'})
    return this.http.post('http://localhost:3000/user/signin',body, {headers})
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

  isLoggedIn(){
    return localStorage.getItem('token') !==null;
  }
}
