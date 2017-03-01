import { Component, OnInit,  } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Patient } from '../patient.model';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.profileForm= new FormGroup({
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      email:new FormControl(''),
      referredBy:new FormControl(''),
      primaryPhone:new FormControl(''),
      secondaryPhone:new FormControl(''),
      gender:new FormControl(''),
      pregnant:new FormControl(''),
      dateOfBirth:new FormControl(''),
      address:new FormControl(''),
      city:new FormControl(''),
      state:new FormControl(''),
      zip:new FormControl(''),
      emergencyContact:new FormControl(''),
      emergencyPhone:new FormControl('')
    })

    this.authService.getPatientInfo().subscribe(
      data=>{
        for (var p in data.patientProfile){
          this.currentForm[p]=data.patientProfile[p]
          this.profileForm.patchValue({[p]:data.patientProfile[p]})
        }
      },
      err=>console.error(err)
    )
  }

  public phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public dobMask = [ /[0-1]/, /\d/, '/', /[0-3]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]

  profileForm:FormGroup;
  currentForm={};
  formDisabled:boolean=true;

  onSave(){
    console.log(this.profileForm.value)
  }

  onEdit(){
    this.formDisabled=false;
  }

  onCancel(){
    this.formDisabled=true;
    this.profileForm.reset();
    for (var p in this.currentForm){
      this.profileForm.patchValue({[p]:this.currentForm[p]})
    }
  }
}
