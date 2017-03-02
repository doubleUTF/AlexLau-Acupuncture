import { Component, OnInit,  } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Patient } from '../patient.model';
import { AuthService } from '../../auth/auth.service';
import { PatientService } from '../patient.service';
import { ValidatorService } from '../../services/validator.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService:AuthService,
  private patientService:PatientService,
  private validatorService:ValidatorService) { }

  ngOnInit() {
    this.profileForm= new FormGroup({
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      email:new FormControl('',[this.validatorService.validateEmail]),
      referredBy:new FormControl(''),
      primaryPhone:new FormControl('',Validators.required),
      secondaryPhone:new FormControl(''),
      gender:new FormControl('',Validators.required),
      pregnant:new FormControl(''),
      dateOfBirth:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      city:new FormControl('',Validators.required),
      state:new FormControl('',Validators.required),
      zip:new FormControl('',Validators.required),
      emergencyContact:new FormControl(''),
      emergencyPhone:new FormControl('')
    })

    this.authService.getPatientInfo().subscribe(
      data=>{
        let tempForm=JSON.parse(JSON.stringify(this.profileForm.value));
        // Don't display insurance information in first profile page
        this.currentForm=_.omit(tempForm,['insurances']);
        for (var p in data.patientProfile){
          this.currentForm[p]=data.patientProfile[p]
        }
        this.profileForm.setValue(this.currentForm);
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
    const formModel:Patient= this.profileForm.value;
    this.patientService.savePatientInfo(formModel).subscribe(
      data=>{
        console.log(data)
      },
      err=>{
        console.error(err);
        this.showError(err);
      }
    )
    this.currentForm=formModel;
    this.formDisabled=true;
  }

  onEdit(){
    this.formDisabled=false;
  }

  onCancel(){
    this.formDisabled=true;
    this.profileForm.reset(this.currentForm);
  }

  errorPresent=false;
  errorMessage=null;
  showError(err){
    this.errorPresent=true;
    this.errorMessage=err.err;
  }
}
