import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  navWidth='0px';

  openNav(){
    this.navWidth='250px';
  }

  closeNav(){
    this.navWidth='0px';
  }
}
