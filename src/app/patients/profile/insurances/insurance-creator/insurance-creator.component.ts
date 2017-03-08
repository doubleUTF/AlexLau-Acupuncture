import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl,
Validators } from '@angular/forms';

@Component({
  selector: 'insurance-creator',
  templateUrl: './insurance-creator.component.html',
  styleUrls: ['./insurance-creator.component.css']
})
export class InsuranceCreatorComponent implements OnInit {
  @Output() createInsurance=new EventEmitter();
  constructor() { }

  insuranceForm:FormGroup;
  ngOnInit() {
    this.insuranceForm=new FormGroup({
      groupName:new FormControl('', Validators.required),
      otherInsurance:new FormControl(''),
      memberId:new FormControl('',Validators.required),
      startDate:new FormControl('',Validators.required),
      color:new FormControl('')
    })
  }

  public dateMask = [ /[0-1]/, /\d/, '/', /[0-3]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  onCreateInsurance(){
    if (this.insuranceForm.value.groupName=='Other'){
      this.insuranceForm.patchValue({groupName:this.insuranceForm.value.otherInsurance})
    }
    this.createInsurance.emit(this.insuranceForm.value)
    this.insuranceForm.reset();
    this.insuranceForm.patchValue({groupName:''})
  }

  fullForm:boolean=false;

  ngDoCheck(){
    if (this.insuranceForm.value.groupName){
      this.fullForm=true
    } else {this.fullForm=false}
  }

  onColorSelect(color:string){
    this.insuranceForm.patchValue({color:color});
  }

  colors:string[]=[
    'rgb(255, 138, 128)',
    'rgb(255, 209, 128)',
    'rgb(255, 255, 141)',
    'rgb(207, 216, 220)',
    'rgb(128, 216, 255)',
    'rgb(167, 255, 235)',
    'rgb(204, 255, 144)',
    'rgb(255, 255, 255)'
  ]
}
