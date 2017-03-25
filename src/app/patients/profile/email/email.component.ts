import { Component, OnInit, Input, trigger, state, style, transition,
animate} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ValidatorService } from '../../../services/validator.service';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations:[
    trigger('alertState',[
      state('hidden',style({opacity:0})),
      state('show',style({opacity:1})),
      transition('hidden=>show',animate(500)),
      transition('show=>hidden',animate(500))
    ])
  ]
})
export class EmailComponent implements OnInit {
  // TODO use double opt security if patient wants to change
  // email or password. This will require implementation of new
  // methods of node email verification.
  constructor(
    private validatorService:ValidatorService,
    private patientService:PatientService
  ) { }

  @Input() email:string;
  emailForm:FormGroup;
  emailSaved:boolean=false;
  newEmail:string;
  emailAlertState='hidden';

  ngOnInit() {
    this.emailForm=new FormGroup({
      currentEmail:new FormControl({value:'',disabled:true},this.validatorService.validateEmail),
      newEmail:new FormControl('', this.validatorService.validateEmail),
      retypeEmail:new FormControl('', this.validatorService.validateEmail),
    });
    setTimeout(()=>this.emailForm.patchValue({currentEmail:this.email}))
  }

  onUpdateEmail(){
    this.newEmail=this.emailForm.value.newEmail
    this.patientService.savePatientInfo({
      email:this.newEmail})
      .subscribe(
        data=>{
          this.emailForm.patchValue({currentEmail:this.newEmail})
          this.emailSaved=true
          this.emailAlertState='show'
        },
        err=>console.error(err)
      )
  }

}
