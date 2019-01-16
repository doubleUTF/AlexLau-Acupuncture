import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {MetaService} from '../../meta-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css','../shared_comp.css']
})
export class ServicesComponent implements OnInit {

  constructor(
    private _title:Title,
    private _meta: Meta,
    private metaService:MetaService
  ) { }

  ngOnInit() {
    this._title.setTitle('Services and Symptoms');
    this._meta.updateTag({name:'description',content:'Services we provide and symptoms we treat'})
    this.metaService.createCanonicalURL();
  }

}
