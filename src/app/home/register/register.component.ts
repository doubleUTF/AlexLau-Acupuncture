import { Component, OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Patient } from '../../patients/patient.model';
import { ValidatorService } from '../../services/validator.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private validatorService:ValidatorService,
    private router:Router
) { }

  patientForm:FormGroup;
  ngOnInit() {
    this.patientForm=new FormGroup({
      firstName:new FormControl(null, Validators.required),
      lastName:new FormControl(null, Validators.required),
      email:new FormControl('', [
        Validators.required,
        this.validatorService.validateEmail
      ]),
      password:new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });

    this.patientForm.valueChanges.subscribe(
      data=>this.onValueChange(data)
    );
  }

  formErrors={
    firstName:'',
    lastName:'',
    email:'',
    password:''
  };

  validationMessages={
    firstName:{
      required:'Name is required.',
    },
    lastName:{
      required:'Name is required.',
    },
    email:{
      required:'Email is required.',
      validateEmail:'Invalid email.'
    },
    password:{
      required:'Password is required.',
      minlength:'Password must be at least 6 characters in length.'
    }
  };

  onValueChange(data?:string){
    if (!this.patientForm) return;
    const form=this.patientForm;

    for (const field in this.formErrors){
      // Clear error messages
      this.formErrors[field]='';
      const control=form.get(field);

      if (control && control.dirty && !control.valid){
        const messages= this.validationMessages[field];
        for (const key in control.errors){
          this.formErrors[field]+=messages[key] + ' ';
        }
      }
    }
  }

  onSubmit(){
    const patient= new Patient(
      this.patientForm.value.email,
      this.patientForm.value.password,
      this.patientForm.value.firstName,
      this.patientForm.value.lastName
    );
    this.authService.register(patient)
      .subscribe(
        data=>{
          localStorage.setItem('token',data.token);
          localStorage.setItem('patientId',data.patientId);
          this.router.navigateByUrl('/patients/dashboard')
      },
        error=>console.error(error)
      );
    this.patientForm.reset({email:''});
  }

  focusEvent= new EventEmitter<boolean>();

  ngAfterViewInit(){
    this.focusEvent.emit(true)
  }

}
