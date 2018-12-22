import { Component, OnInit } from '@angular/core';
import {TimeService} from '../../time-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private ts:TimeService
  ) { }

  ngOnInit() {
    this.currentYear=this.ts.getCurrentYear()
  }

  currentYear:number;
}
