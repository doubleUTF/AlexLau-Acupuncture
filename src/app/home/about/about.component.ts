import { Component, OnInit,AfterViewInit, ElementRef, OnDestroy } from '@angular/core';
import {TimeService} from '../../time-service.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../shared_comp.css']
})
export class AboutComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(
    private elemRef:ElementRef,
    private ts:TimeService,
    private _title:Title,
    private _meta: Meta,
  ) { }

  yearsPracticed:number;
  ngOnInit() {
    this.yearsPracticed=this.ts.getYearsPracticing();
    this._title.setTitle('About Page');
    this._meta.updateTag({ name: 'description', content: 'About our clinic' });
    this._meta.updateTag({name:'keywords',content:'Alex Lau'})
  }

  ngAfterViewInit(){
    var s= document.createElement('script');
    s.type='text/javascript';
    s.innerHTML=`(function(d, t) {var g = d.createElement(t);var s = d.getElementsByTagName(t)[0];g.id = "yelp-biz-badge-script-rrc-1z8sYjCaNRtBS_l1hSl-2A";g.src = "//yelp.com/biz_badge_js/en_US/rrc/1z8sYjCaNRtBS_l1hSl-2A.js";s.parentNode.insertBefore(g, s);}(document, 'script'));`
    this.elemRef.nativeElement.appendChild(s);
  }

  ngOnDestroy(){
    this.metaService.deleteCanonicalURL()
  }
}
