import { Injectable } from '@angular/core';
import { isAlpha } from 'validator';
import { isEmail } from 'validator';
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

  asyncValidator(control:FormControl):Promise<any>|Observable<any>{
    const promise=new Promise<any>(
      (resolve,reject)=>{
        setTimeout(()=>{
          if (!control.value){
            resolve({'invalid':true});
          } else {
            resolve(null);
          }
        },1500);
      }
    );
    return promise;
  }
}
