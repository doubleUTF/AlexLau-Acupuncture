import { RouterModule, Routes } from '@angular/router';
import { HomeRoutes} from './home/home.routing';

const APP_ROUTES:Routes=[
  {path:'', children:HomeRoutes},
  {path:'**', redirectTo:'/'}
]

export const routing=RouterModule.forRoot(APP_ROUTES)
