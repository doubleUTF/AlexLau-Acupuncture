import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { ScheduleComponent} from './dashboard/schedule/schedule.component';

const APP_ROUTES=[
  {path:'', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'schedule',component:ScheduleComponent}
]

export const routing=RouterModule.forRoot(APP_ROUTES)
