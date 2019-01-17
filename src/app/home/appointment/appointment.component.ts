import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import {MetaService} from '../../meta-service.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css', '../shared_comp.css']
})
export class AppointmentComponent implements OnInit, OnDestroy {

  constructor(
    private route:Router,
    private _title:Title,
    private _meta: Meta,
    private metaService:MetaService
    ) { }

  showButtons=true;
  ngOnInit() {
    this.metaService.createCanonicalURL()
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

  ngOnDestroy(){
    this.metaService.deleteCanonicalURL()
  }

}
