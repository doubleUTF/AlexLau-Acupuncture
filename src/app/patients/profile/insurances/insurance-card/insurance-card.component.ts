import { Component, OnInit, Input,
  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'insurance-card',
  templateUrl: './insurance-card.component.html',
  styleUrls: ['./insurance-card.component.css']
})
export class InsuranceCardComponent implements OnInit {
  @Input() insurance={};
  @Output() checkedPrimary= new EventEmitter();
  @Output() removed=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  checkPrimary(){
    this.checkedPrimary.emit();
  }

  showCheck:boolean=false;

  toggleCheck(){
    this.showCheck=!this.showCheck
  }

  remove(){
    this.removed.emit();
  }
}
