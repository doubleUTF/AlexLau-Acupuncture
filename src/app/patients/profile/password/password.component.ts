import { Component, OnInit, trigger, state, style, transition,
animate } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  animations:[
    trigger('alertState',[
      state('hidden',style({opacity:0})),
      state('show',style({opacity:1})),
      transition('hidden=>show',animate(500)),
      transition('show=>hidden',animate(500))
    ])
  ]
})
export class PasswordComponent implements OnInit {

  // TODO use double opt security if patient wants to change
  // email or password. This will require implementation of new
  // methods of node email verification.
  
  constructor(private patientService:PatientService) { }
  passwordForm:FormGroup;
  ngOnInit() {
    this.passwordForm=new FormGroup({
      currentPassword:new FormControl('',Validators.required),
      newPassword:new FormControl('',[
        Validators.required, Validators.minLength(6)]),
      retypePassword:new FormControl('',Validators.required)
    })
  }

  passwordSaved:boolean=false;
  passwordUnsuccessful=false;
  passwordAlertState='hidden'
  // TODO send an email notifying the patient's password has changed
  onUpdatePassword(){
    this.patientService.updatePassword({
      currentPassword:this.passwordForm.value.currentPassword,
      newPassword:this.passwordForm.value.newPassword
    }).subscribe(
      data=>{
        this.passwordSaved=true;
        this.passwordUnsuccessful=false
        this.passwordAlertState='show'
        this.passwordForm.reset();
        this.passwordForm.disabled;
      },
      err=>{
        this.passwordUnsuccessful=true
        this.passwordAlertState='show'
        this.passwordForm.reset();
      }
    )
  }
}
