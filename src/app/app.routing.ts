import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PATIENTS_ROUTES } from './patients/patients.routing';
import { HomeRoutes} from './home/home.routing';

const APP_ROUTES:Routes=[
  {path:'', children:HomeRoutes},
  {path:'patients', children: PATIENTS_ROUTES },
  {path:'**', redirectTo:'/'}
]

export const routing=RouterModule.forRoot(APP_ROUTES)
