import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ServicesComponent} from './services/services.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AboutComponent } from './about/about.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactComponent } from './contact/contact.component';
import { FullComponent } from './appointment/full/full.component';
import { ConsultationComponent } from './appointment/consultation/consultation.component';
import { FollowUpComponent } from './appointment/follow-up/follow-up.component';

export const HomeRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'services', component: ServicesComponent},
  {path: 'insurance', component: InsuranceComponent },
  {path: 'about', component: AboutComponent},
  {path:'appointment',component:AppointmentComponent, children:[
    {path:'full', component:FullComponent},
    {path:'consultation', component: ConsultationComponent},
    {path:'follow-up', component:FollowUpComponent}
  ]},
  {path:'contact', component:ContactComponent}
]
