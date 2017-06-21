import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ServicesComponent} from './services/services.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const HomeRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'services', component: ServicesComponent},
  {path:'register', component: RegisterComponent},
  {path:'signin',component: SignInComponent},
]
