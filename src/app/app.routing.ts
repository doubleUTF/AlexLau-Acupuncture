import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PATIENTS_ROUTES } from './patients/patients.routing';

const APP_ROUTES:Routes=[
  {path:'', component:HomeComponent},
  {path:'patients', children: PATIENTS_ROUTES },
  {path:'**', redirectTo:'/'}
]

export const routing=RouterModule.forRoot(APP_ROUTES)
