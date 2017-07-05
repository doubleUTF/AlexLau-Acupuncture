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
import { ContactComponent } from './contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { RouterModule } from '@angular/router';
import { FullComponent } from './appointment/full/full.component';
import { ConsultationComponent } from './appointment/consultation/consultation.component';
import { FollowUpComponent } from './appointment/follow-up/follow-up.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    LazyLoadImageModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCP_Vy7_B9ESJi11tTb58XKlLT-iR4aOMY'
    })
  ],
  declarations: [
    HomeComponent,
    ServicesComponent,
    SignInComponent,
    RegisterComponent,
    InsuranceComponent,
    AboutComponent,
    AppointmentComponent,
    ContactComponent,
    FullComponent,
    ConsultationComponent,
    FollowUpComponent,
  ],
  exports:[
    HomeComponent,
    ServicesComponent
  ]
})
export class HomeModule { }
