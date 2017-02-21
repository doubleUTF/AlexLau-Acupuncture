import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { ScheduleComponent} from './dashboard/schedule/schedule.component';
import { RegisterComponent} from './auth/register/register.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';

const APP_ROUTES=[
  {path:'', component:HomeComponent},
  {path:'patients/dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'schedule', component: ScheduleComponent},
  {path:'register', component: RegisterComponent},
  {path:'patients/signin',component:SignInComponent}
]

export const routing=RouterModule.forRoot(APP_ROUTES)
