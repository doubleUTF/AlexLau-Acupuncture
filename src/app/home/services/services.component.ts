import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewInit {

  constructor(private elemRef:ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    var s= document.createElement('script');
    s.type='text/javascript';
    s.innerHTML=`(function(d, t) {var g = d.createElement(t);var s = d.getElementsByTagName(t)[0];g.id = "yelp-biz-badge-script-rrc-i90qGSHnWWxXLSo9FLCpaw";g.src = "//yelp.com/biz_badge_js/en_US/rrc/i90qGSHnWWxXLSo9FLCpaw.js";s.parentNode.insertBefore(g, s);}(document, 'script'));`
    this.elemRef.nativeElement.appendChild(s);
  }
}
