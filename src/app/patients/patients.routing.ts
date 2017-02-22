import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { ScheduleComponent} from './schedule/schedule.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { AppointmentsListComponent} from './appointments-list/appointments-list.component'
import { AuthGuard } from '../auth/auth.guard';

export const PATIENTS_ROUTES:Routes=[
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'schedule', component: ScheduleComponent, canActivate:[AuthGuard]},
  {path:'register', component: RegisterComponent},
  {path:'signin',component: SignInComponent},
  {path:'appointments-list', component:AppointmentsListComponent,
   canActivate:[AuthGuard]},
]

// export const patientRouting=RouterModule.forChild(PATIENTS_ROUTES)
