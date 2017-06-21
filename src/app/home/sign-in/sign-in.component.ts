import { Component, OnInit, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../../patients/patient.model';
import { ValidatorService } from '../../services/validator.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, AfterViewInit {

  constructor(private authService:AuthService, private router:Router,
  private validatorService:ValidatorService) { }

  ngOnInit() {
    this.signInForm=new FormGroup({
      email:new FormControl('',[
        Validators.required,
        this.validatorService.validateEmail
      ]),
      password:new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    })
    this.signInForm.valueChanges.subscribe(
      (data)=>this.onValueChange()
    );

  }
  signInForm:FormGroup;

  formErrors={
    email:'',
    password:''
  };

  validationMessages={
    email:{
      required:'Email required.',
      validateEmail:'Invalid email.'
    },
    password:{
      required:'Password required.',
      minlength:'Minimum password length is 6 characters.'
    }
  };

  onValueChange(){
    const form= this.signInForm;
    // Clear messages
    for (const field in this.formErrors){
      this.formErrors[field]='';
      const control= form.get(field);

      if (control && control.invalid && control.dirty){
        const messages=this.validationMessages[field];
        for (const key in control.errors){
          this.formErrors[field]+=messages[key] + ' ';
        }
      }
    }
  }
  onSubmit(){
    const patient= new Patient(
      this.signInForm.value.email,
      this.signInForm.value.password
    )
    this.authService.signIn(patient)
      .subscribe(
      data=>{
        localStorage.setItem('token',data.token),
        localStorage.setItem('patientId',data.patientId);
        this.authService.emitName([data.firstName,data.lastName])
        this.router.navigateByUrl('/patients/dashboard')
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
