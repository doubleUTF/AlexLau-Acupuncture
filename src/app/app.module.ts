import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { BootstrapModule } from './bootstrap/bootstrap.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './dashboard/schedule/schedule.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthService } from './auth/auth.service';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { FocusDirective } from './directives/focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    HomeComponent,
    ScheduleComponent,
    RegisterComponent,
    SignInComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BootstrapModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
