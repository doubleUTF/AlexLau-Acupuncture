import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../user.model';
import { isEmail } from 'validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.userForm=new FormGroup({
      firstName:new FormControl(null, Validators.required),
      lastName:new FormControl(null, Validators.required),
      email:new FormControl('', [
        Validators.required,
        this.validateEmail
      ]),
      password:new FormControl(null, Validators.required)
    })
  }

  userForm:FormGroup;

  onSubmit(){
    console.log(this.userForm)
  }

  validateEmail(c:FormControl){
    return isEmail(c.value) ? null :{
      validateEmail:{
        valid:false
      }
    };
  }
}
