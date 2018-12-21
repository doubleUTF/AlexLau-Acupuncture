import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { HomeComponent } from './home.component';
import { ServicesComponent } from './services/services.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AboutComponent } from './about/about.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactComponent } from './contact/contact.component';
import { FullComponent } from './appointment/full/full.component';
import { ConsultationComponent } from './appointment/consultation/consultation.component';
import { FollowUpComponent } from './appointment/follow-up/follow-up.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
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
    InsuranceComponent,
    AboutComponent,
    AppointmentComponent,
    ContactComponent,
    FullComponent,
    ConsultationComponent,
    FollowUpComponent,
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
