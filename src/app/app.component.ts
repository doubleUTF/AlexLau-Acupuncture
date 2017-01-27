import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  calendarOptions:Object = {
    defaultView:'agendaWeek',
    views:{
      agenda:{
        slotDuration:'00:15:00',
        minTime:'08:00',
        maxTime:'19:00'
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
      hiddenDays:[0],
        fixedWeekCount : false,
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [

        ]
      };
  }
