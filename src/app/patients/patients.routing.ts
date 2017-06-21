import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent} from './dashboard/dashboard.component';
import { ScheduleComponent} from './schedule/schedule.component';
import { AppointmentsListComponent} from './appointments-list/appointments-list.component'
import { AuthGuard } from '../auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';


export const PATIENTS_ROUTES:Routes=[
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'schedule', component: ScheduleComponent},

  {path:'appointments-list', component:AppointmentsListComponent},
  {path:'profile',component:ProfileComponent},
  {path:'**', redirectTo:'/patients/signin'}
]

// export const patientRouting=RouterModule.forChild(PATIENTS_ROUTES)
