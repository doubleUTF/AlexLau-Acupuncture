import { Component, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../shared_comp.css']
})
export class ContactComponent implements OnInit {

  lat: number=37.557826;
  lng:number=-122.265209;
  zoom:number=14;

  markerLat:number=37.553282;
  markerLng:number=-122.256321;
  label:'A';

  constructor() { }

  ngOnInit() {
  }

}
