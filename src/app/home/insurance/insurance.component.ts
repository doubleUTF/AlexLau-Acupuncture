import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {MetaService} from '../../meta-service.service';
@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css','../shared_comp.css']
})
export class InsuranceComponent implements OnInit, OnDestroy {

  constructor(
    private _title:Title,
    private _meta: Meta,
    private metaService:MetaService
  ) { }

  ngOnInit() {
    this._title.setTitle('Insurances Accepted');
    this._meta.updateTag({name:'description',content:'We accept the following insurances'})
    this.metaService.createCanonicalURL()
  }

  ngOnDestroy(){
    this.metaService.deleteCanonicalURL()
  }
}
