import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurances',
  templateUrl: './insurances.component.html',
  styleUrls: ['./insurances.component.css']
})
export class InsurancesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  insurance={
    groupName:'United Health Care',
    memberId:'12345abcde',
    color:'lightblue'
  }

}
