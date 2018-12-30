import { Component, OnInit } from '@angular/core';
import {TimeService} from '../time-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private ts:TimeService,
    private _title:Title,
    private _meta: Meta
  ) { }
  yearsPracticed:number;
  ngOnInit() {
    this.yearsPracticed=this.ts.getYearsPracticing()
  }

  // Homepage background image
  image='./assets/zen.jpg';
}
