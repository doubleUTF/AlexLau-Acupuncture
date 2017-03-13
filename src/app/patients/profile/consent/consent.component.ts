import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'profile-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css']
})
export class ConsentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.consentForm= new FormGroup({
      
    })
  }
  consentForm:FormGroup
}
