import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SafePipe } from '../pipes/safe.pipe';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { AppointmentItemComponent } from './appointments-list/appointment-item/appointment-item.component';
import { AppointmentService } from './appointments-list/appointment.service';
import { ProfileComponent } from './profile/profile.component';
import { TextMaskModule } from 'angular2-text-mask';
import { PatientService} from './patient.service';
import { ValidatorService } from '../services/validator.service';
import { EqualValidator} from '../directives/equal-validator.directive';
import { InsuranceCardComponent } from './profile/insurances/insurance-card/insurance-card.component';
import { InsurancesComponent } from './profile/insurances/insurances.component';
import { InsuranceCreatorComponent } from './profile/insurances/insurance-creator/insurance-creator.component';
import { ColorPickerComponent } from './profile/insurances/color-picker/color-picker.component';
import { ConsentComponent } from './profile/consent/consent.component';
import { PasswordComponent } from './profile/password/password.component';
import { EmailComponent } from './profile/email/email.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BootstrapModule,
    RouterModule,
    TextMaskModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent,
    ScheduleComponent,
    SafePipe,
    AppointmentsListComponent,
    AppointmentItemComponent,
    ProfileComponent,
    EqualValidator,
    InsuranceCardComponent,
    InsurancesComponent,
    InsuranceCreatorComponent,
    ColorPickerComponent,
    ConsentComponent,
    PasswordComponent,
    EmailComponent,
  ],
  providers:[
    AppointmentService,
    PatientService,
    ValidatorService
  ]
})

export class PatientsModule { }
