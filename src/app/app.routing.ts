import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent} from './home/services/services.component';
import { InsuranceComponent } from './home/insurance/insurance.component';
import { AboutComponent } from './home/about/about.component';
import { AppointmentComponent } from './home/appointment/appointment.component';
import { ContactComponent } from './home/contact/contact.component';
import { FullComponent } from './home/appointment/full/full.component';
import { ConsultationComponent } from './home/appointment/consultation/consultation.component';
import { FollowUpComponent } from './home/appointment/follow-up/follow-up.component';

const APP_ROUTES:Routes=[
  {path:'', component:HomeComponent},
  {path:'services', component: ServicesComponent},
  {path: 'insurance', component: InsuranceComponent },
  {path: 'about', component: AboutComponent},
  {path:'appointment',component:AppointmentComponent, children:[
    {path:'full', component:FullComponent},
    {path:'consultation', component: ConsultationComponent},
    {path:'follow-up', component:FollowUpComponent}
  ]},
  {path:'contact', component:ContactComponent},
  {path:'**',redirectTo:'/'},
]

export const routing=RouterModule.forRoot(APP_ROUTES,{enableTracing:true})
