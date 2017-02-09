import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { AppointmentsComponent } from './appointments/appointments.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './appointments/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AppointmentsComponent,
    HomeComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BootstrapModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
