import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.signInForm=new FormGroup({
      email:new FormControl('',[
        Validators.required,
        this.authService.validateEmail
      ]),
      password:new FormControl(null, Validators.required)
    })
  }
  signInForm:FormGroup;

  onSubmit(){
    this.signInForm.reset({email:''})
  }
}
