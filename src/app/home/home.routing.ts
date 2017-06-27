import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ServicesComponent} from './services/services.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { AboutComponent } from './about/about.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactComponent } from './contact/contact.component';

export const HomeRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'services', component: ServicesComponent},
  {path: 'insurance', component: InsuranceComponent },
  {path: 'about', component: AboutComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'register', component: RegisterComponent},
  {path:'signin',component: SignInComponent},
  {path:'contact', component:ContactComponent}
]
