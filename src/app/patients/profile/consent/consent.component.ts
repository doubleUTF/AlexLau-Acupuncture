import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'profile-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css']
})
export class ConsentComponent implements OnInit {

  constructor(private patientService:PatientService) { }

  date:Date=new Date()
  ngOnInit() {
    this.consentForm= new FormGroup({
      signature:new FormControl('',Validators.required),
      date:new FormControl(this.date,Validators.required)
    })
  }
  consentForm:FormGroup

  // TODO: Do not allow user to resign form after it has been signed. Need
  // to research ESIGN federal law and what constitues as digital
  // signature to become compliant.
  
  onSubmit(){
    this.patientService.savePatientInfo({consent:this.consentForm.value}).subscribe(
      data=>console.log('Successfully saved:' + data),
      error=>console.error(error)
    )
  }
}
