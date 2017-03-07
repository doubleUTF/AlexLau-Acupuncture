import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'insurance-card',
  templateUrl: './insurance-card.component.html',
  styleUrls: ['./insurance-card.component.css']
})
export class InsuranceCardComponent implements OnInit {
  @Input() insurance={};
  constructor() { }

  ngOnInit() {
  }

  onChecked(){
    console.log('checked')
  }

  showCheck:boolean=false;

  toggleCheck(){
    this.showCheck=!this.showCheck
  }
}
