import { Component, OnInit, Input } from '@angular/core';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-insurances',
  templateUrl: './insurances.component.html',
  styleUrls: ['./insurances.component.css']
})
export class InsurancesComponent implements OnInit {

  constructor(private patientService:PatientService) { }

  ngOnInit() {
  }

  changed:boolean=false;

  @Input() profileComplete:boolean=false;

  onCheckedPrimary(i:number){
    this.insurances.forEach((insurance)=>{
      insurance.primary=false;
    })
    this.insurances[i].primary=true;
    this.changed=true;
  }

  onRemoved(i:number){
    this.insurances.splice(i,1);
    this.changed=true;
  }

  onCreateInsurance(insurance){
    if (this.insurances.length==0){
      insurance.primary=true;
    }
    this.insurances.push(insurance);
    this.changed=true;
  }

  insuranceSaved:boolean=false;
  insuranceError:boolean=false;
  saveInsurances(){
    this.patientService.savePatientInfo({insurances:this.insurances})
    .subscribe(
      data=>{
        this.insuranceSaved=true;
        this.changed=false;
      },
      err=>{
        this.insuranceError=true;
        this.insuranceSaved=false;
      }
    )
  }

  @Input() insurances=[]
}
