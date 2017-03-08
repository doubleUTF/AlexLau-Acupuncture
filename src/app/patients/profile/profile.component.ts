import { Component, OnInit, trigger, state, style, transition,
animate } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Patient } from '../patient.model';
import { AuthService } from '../../auth/auth.service';
import { PatientService } from '../patient.service';
import { ValidatorService } from '../../services/validator.service';
import * as _ from 'lodash';

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
      primaryPhone:new FormControl('',[Validators.required]),
      secondaryPhone:new FormControl(''),
      gender:new FormControl('',Validators.required),
      pregnant:new FormControl(''),
      dateOfBirth:new FormControl('',Validators.required),
      address:new FormGroup({
        street:new FormControl('',Validators.required),
        city:new FormControl('',Validators.required),
        state:new FormControl('',Validators.required),
        zip:new FormControl('',Validators.required),
      }),
      emergencyContact:new FormControl(''),
      emergencyPhone:new FormControl('')
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
        if (data.patientProfile.insurances){
          this.insurances=data.patientProfile.insurances;
        }
        this.currentForm=JSON.parse(JSON.stringify(this.profileForm.value));
        // Don't display insurance information in first profile page
        let incomingForm=_.omit(data.patientProfile,['insurances','email']);
        // console.log(this.currentForm)
        for (var p in incomingForm){
          this.currentForm[p]=data.patientProfile[p]
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

  insurances=[
    // {
    //     groupName:'United Health Care',
    //     memberId:'12345abcde',
    //     startDate:'01/30/2017',
    //     primary:true,
    //     color:'lightblue'
    //   },
    //   {
    //     groupName:'Blue Cross',
    //     memberId:'12345abcde',
    //     startDate:'04/30/2017',
    //     primary:false,
    //     color:'lightblue'
    //   },
    //   {
    //     groupName:'United Health Care',
    //     memberId:'12345abcde',
    //     startDate:'02/06/2017',
    //     primary:false,
    //     color:'lightblue'
    //   }
    ];
  personalAlertState='hidden'
  canView:boolean=false;
  profileForm:FormGroup;
  emailForm:FormGroup;
  passwordForm:FormGroup;
  currentForm={};
  formDisabled:boolean=true;

  // TODO use double opt security if patient wants to change
  // email or password.

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
      this.personalAlertState='show'
    } else if (this.profileForm.valid){
      this.personalAlertState='hidden'
    }
  }

}
