import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BootstrapModule } from '../bootstrap.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { FocusDirective } from '../directives/focus.directive';
import { SafePipe } from '../pipes/safe.pipe';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { AppointmentItemComponent } from './appointments-list/appointment-item/appointment-item.component';
import { AppointmentService } from './appointments-list/appointment.service';
import { ProfileComponent } from './profile/profile.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BootstrapModule,
    RouterModule,
    TextMaskModule
  ],
  declarations: [
    SignInComponent,
    DashboardComponent,
    ScheduleComponent,
    RegisterComponent,
    FocusDirective,
    SafePipe,
    AppointmentsListComponent,
    AppointmentItemComponent,
    ProfileComponent
  ],
  providers:[
    AppointmentService
  ]
})

export class PatientsModule { }
