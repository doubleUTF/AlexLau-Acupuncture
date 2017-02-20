import { Component, OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Patient } from '../patient.model';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.patientForm=new FormGroup({
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

  patientForm:FormGroup;

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
          localStorage.setItem('token',data.token),
          localStorage.setItem('patientId',data.patientId)
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
