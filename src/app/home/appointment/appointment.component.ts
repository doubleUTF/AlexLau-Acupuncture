import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css', '../shared_comp.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private route:Router) { }

  showButtons=true;
  ngOnInit() {
    if (this.route.url!='/appointment'){
      this.showButtons=false;
    }
    this.route.events.subscribe(
      (event)=>{
        if (event instanceof NavigationEnd){
          if (event.url!='/appointment'){
            this.showButtons=false;
          } else(
            this.showButtons=true
          )
        }
      }

    )
  }

}
