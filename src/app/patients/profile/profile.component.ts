import { Component, OnInit, trigger, state, style, transition,
animate } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Patient } from '../patient.model';
import { AuthService } from '../../auth/auth.service';
import { PatientService } from '../patient.service';
import { ValidatorService } from '../../services/validator.service';
import * as _ from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations:[
    trigger('alertState',[
      state('hidden',style({opacity:0})),
      state('show',style({opacity:1})),
      transition('hidden=>show',animate(500)),
      transition('show=>hidden',animate(500))
    ])
  ]
})
export class ProfileComponent implements OnInit {

  constructor(private authService:AuthService,
  private patientService:PatientService,
  private validatorService:ValidatorService) { }

  ngOnInit() {
    this.profileForm= new FormGroup({
      firstName:new FormControl('',[Validators.required]),
      lastName:new FormControl('',[Validators.required]),
      referredBy:new FormControl(''),
      primaryPhone:new FormControl('',[
        Validators.required,
        Validators.pattern(/^\(?([0-9]{3})\)?[-.● ]?([0-9]{3})[-.●]?([0-9]{4})$/)]),
      secondaryPhone:new FormControl('',Validators.pattern(/^\(?([0-9]{3})\)?[-.● ]?([0-9]{3})[-.●]?([0-9]{4})$/)),
      gender:new FormControl('',Validators.required),
      pregnant:new FormControl(''),
      dateOfBirth:new FormControl('',[
        Validators.required,
        Validators.pattern(/^(1[0-2]|0[1-9])\/(3[01]|[12][0-9]|0[1-9])\/[0-9]{4}$/)]),
      address:new FormGroup({
        street:new FormControl('',Validators.required),
        city:new FormControl('',Validators.required),
        state:new FormControl('',Validators.required),
        zip:new FormControl('',[
          Validators.required,
          Validators.pattern(/^[0-9]{5}$/)]),
      }),
      emergencyContact:new FormControl(''),
      emergencyPhone:new FormControl('',Validators.pattern(/^\(?([0-9]{3})\)?[-.● ]?([0-9]{3})[-.●]?([0-9]{4})$/))
    })

    this.emailForm=new FormGroup({
      currentEmail:new FormControl({value:'',disabled:true},this.validatorService.validateEmail),
      newEmail:new FormControl('', this.validatorService.validateEmail),
      retypeEmail:new FormControl('', this.validatorService.validateEmail),
    });

    this.passwordForm=new FormGroup({
      currentPassword:new FormControl('',Validators.required),
      newPassword:new FormControl('',[
        Validators.required, Validators.minLength(6)]),
      retypePassword:new FormControl('',Validators.required)
    })

    this.authService.getPatientInfo().subscribe(
      data=>{
        // If true, send insurances to child Insurances component
        if (data.patientProfile.insurances){
          this.insurances=data.patientProfile.insurances;
        }
        this.currentForm=JSON.parse(JSON.stringify(this.profileForm.value));
        // Don't display insurance or email in first profile page
        let incomingForm=_.omit(data.patientProfile,['insurances','email']);
        // Parse the date into mm/dd/yyyy format
        _.set(incomingForm,'dateOfBirth',  moment(data.patientProfile.dateOfBirth).format('L'))
        // console.log(this.currentForm)
        for (var p in incomingForm){
          this.currentForm[p]=incomingForm[p]
        }
        this.profileForm.setValue(this.currentForm);
        this.emailForm.patchValue({currentEmail:data.patientProfile.email})
        this.profileComplete=this.profileForm.valid;
        setTimeout(()=>this.canView=true);
      },
      err=>console.error(err)
    )

  }

  public phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  public dobMask = [ /[0-1]/, /\d/, '/', /[0-3]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  profileComplete:boolean=false;

  insurances=[];
  personalAlertState='hidden'
  canView:boolean=false;
  profileForm:FormGroup;
  emailForm:FormGroup;
  passwordForm:FormGroup;
  currentForm={};
  formDisabled:boolean=true;

  // TODO use double opt security if patient wants to change
  // email or password. This will require implementation of new
  // methods of node email verification.

  profileSaved='hidden'
  onSave(){
    const formModel:Patient= this.profileForm.value;
    this.patientService.savePatientInfo(formModel).subscribe(
      data=>{
        this.profileSaved='show';
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
    this.profileSaved='hidden';
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

  emailSaved:boolean=false;
  newEmail:string;
  emailAlertState='hidden';

  onUpdateEmail(){
    this.newEmail=this.emailForm.value.newEmail
    this.patientService.savePatientInfo({
      email:this.newEmail})
      .subscribe(
        data=>{
          this.emailForm.patchValue({currentEmail:this.newEmail})
          this.profileForm.patchValue({email:this.newEmail})
          this.emailSaved=true
          this.emailAlertState='show'
        },
        err=>console.error(err)
      )
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

  ngDoCheck(){
    if (this.profileForm.invalid) {
      this.personalAlertState='show';
    } if (this.profileForm.valid){
      this.personalAlertState='hidden'
    }
  }

  debug(){
    console.log(this.profileForm)
  }
}
