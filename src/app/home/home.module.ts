import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HomeComponent } from './home.component';
import { ServicesComponent } from './services/services.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AboutComponent } from './about/about.component';
import { AppointmentComponent } from './appointment/appointment.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    LazyLoadImageModule
  ],
  declarations: [
    HomeComponent,
    ServicesComponent,
    SignInComponent,
    RegisterComponent,
    InsuranceComponent,
    AboutComponent,
    AppointmentComponent,
  ],
  exports:[
    HomeComponent,
    ServicesComponent
  ]
})
export class HomeModule { }
