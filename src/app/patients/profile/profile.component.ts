import { Component, OnInit,  } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Patient } from '../patient.model';
import { AuthService } from '../../auth/auth.service';
import { PatientService } from '../patient.service';
import { ValidatorService } from '../../services/validator.service';

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
      firstName:new FormControl('',[Validators.required,
        this.validatorService.validateAlpha]),
      lastName:new FormControl('',[Validators.required,
        this.validatorService.validateAlpha]),
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
    const formModel:Patient= this.profileForm.value;
    this.patientService.savePatientInfo(formModel).subscribe(
      data=>console.log(data),
      err=>console.error(err)
    )
    this.currentForm=formModel;
    this.formDisabled=true;
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
