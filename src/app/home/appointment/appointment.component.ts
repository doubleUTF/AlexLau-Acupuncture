import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css', '../shared_comp.css']
})
export class AppointmentComponent implements OnInit {

  constructor(
    private route:Router,
    private _title:Title,
    private _meta: Meta,
    ) { }

  showButtons=true;
  ngOnInit() {
    this._title.setTitle('Appointment Page');
    this._meta.updateTag({name:'description',content:'Schedule an appointment with us online.'})
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
