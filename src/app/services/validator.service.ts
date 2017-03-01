import { Injectable } from '@angular/core';
import { isAlpha } from 'validator';
import { isEmail } from 'validator';
import { FormControl } from '@angular/forms';

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
}
