import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../user.model';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.userForm=new FormGroup({
      firstName:new FormControl(null, Validators.required),
      lastName:new FormControl(null, Validators.required),
      email:new FormControl('', [
        Validators.required,
        this.authService.validateEmail
      ]),
      password:new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  userForm:FormGroup;

  onSubmit(){
    const user= new User(
      this.userForm.value.email,
      this.userForm.value.password,
      this.userForm.value.firstName,
      this.userForm.value.lastName
    );
    this.authService.register(user)
      .subscribe(
        data=>console.log(data),
        error=>console.error(error)
      );
    this.userForm.reset({email:''});
  }


}
