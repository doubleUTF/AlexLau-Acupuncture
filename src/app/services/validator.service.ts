import { Injectable } from '@angular/core';
import { isAlpha,isEmail, isAfter,isBefore } from 'validator';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ValidatorService {

  constructor() { }
  validateEmail(c:FormControl){
    return isEmail(c.value) ? null :{
      validateEmail:{
        valid:false
      }
    };
  }

  validateAlpha(c:FormControl){
    return isAlpha(c.value) ? null :{
      validateAlpha:{
        valid:false
      }
    }
  }

  validateDOB(c:FormControl){

  }
}
