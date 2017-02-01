import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  calendarOptions:Object = {
    // googleCalendarApiKey:'AIzaSyDWFwpyg1ztInunWMTKRVPpS_NwzA83CdE',
    // eventSources: [
    //   {
    //     googleCalendarId:'dlau373@gmail.com',
    //   }
    // ],
    events:[
      {
      id:'1',
      // title:'Make Appointment',
      start: moment('2017-02-01 10:15'),
      end: moment('2017-02-01 10:30'),
    },
    {
    id:'2',
    // title:'Schedule Appointment',
    start: moment('2017-02-01 10:30'),
    end: moment('2017-02-01 10:45'),
    rendering:'background'
    }
    ],
    defaultView:'agendaWeek',
    views:{
      agenda:{
        slotDuration:'00:15:00',
        minTime:'08:00',
        maxTime:'19:00',
        allDaySlot:false
      }
    },
      header:{
        right:'agendaWeek today prev, next'
      },
      businessHours:[{
        dow:[1,2,3,4,5],
        start:'10:00',
        end:'18:00'
      },{
        dow:[6],
        start:'09:00',
        end:'12:00'
      }],
      // hiddenDays:[0],
        fixedWeekCount : false,
        editable: true,
        eventLimit: true // allow "more" link when too many events
      };
  }
