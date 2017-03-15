import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Alert } from '../../models/alert.model';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService:AuthService) {}

  ngOnInit() {
    this.authService.upcomingAppointments.subscribe(
      (appointments:Array<any>)=>this.upcomingAppointments=appointments,
      err=>console.error(err)
    )
    this.authService.formCompleteSource.subscribe(
      (e:boolean)=>this.formComplete=e,
      err=>console.error(err)
    )
  }

  // TODO: Now that we properly receive appointments on dashboard, it's time to implement
  // the front-end to display a proper alert message to inform user of upcoming appointment.
  upcomingAppointments:Array<any>=[];
  formComplete:boolean;
  alertReady:boolean=false;
  public alert:Alert;

  // Considering refactoring moment related code to another component/directive
  // should the need arise(reusability elsewhere)
  timeFormats={
    sameDay: '[today] dddd, MMMM Do YYYY, h:mm a',
    nextDay: '[tomorrow] dddd, MMMM Do YYYY, h:mm a',
    nextWeek: 'dddd, MMMM Do YYYY, h:mm a',
    sameElse:'dddd, MMMM Do YYYY, h:mm a'
  };

  showUpcomingAlert(){
    if (!this.formComplete){
      this.alert={
        type:'danger',
        message:`Forms must be completed in Account Management before
      receiving treatment`
    };
    } else if (this.upcomingAppointments.length==0){
      this.alert={
        type:'info',
        message:`You have no upcoming appointments`
      }
    } else if (this.upcomingAppointments.length==1) {
      this.alert={
        type:'info',
        message:`You have an appointment
        ${moment(this.upcomingAppointments[0].date).calendar(null,this.timeFormats)}`
      }
    } else {
      let appointments=this.upcomingAppointments.map((x)=>{
        return x.date
      });
      let aptString=''
      appointments.forEach((date)=>{
        aptString+='<b>'+ moment(date).calendar(null,this.timeFormats)+'</b>&nbsp;&nbsp;&nbsp;&nbsp;'
      })

      this.alert={
        type:'info',
        message:`You have appointments ${aptString}`
      }
    }
    this.alertReady=true;
  }

  ngAfterViewInit(){
    this.showUpcomingAlert();
  }
}
