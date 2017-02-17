import { Component, OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, AfterViewInit {

  constructor(private authService:AuthService, private router:Router) { }

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
    const user= new User(
      this.signInForm.value.email,
      this.signInForm.value.password
    )
    this.authService.signIn(user)
      .subscribe(
      data=>{
        localStorage.setItem('token',data.token),
        localStorage.setItem('userId',data.userId);
        this.router.navigateByUrl('/user/dashboard')
      },
      err=>console.error(err)
    )
    this.signInForm.reset({email:''})
  }

  focusEvent= new EventEmitter<boolean>();

  ngAfterViewInit(){
    this.focusEvent.emit(true)
  }
}
