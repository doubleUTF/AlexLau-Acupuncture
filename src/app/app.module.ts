import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { SharedModule } from './shared/shared.module';
import { PatientsModule } from './patients/patients.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    BootstrapModule,
    SharedModule,
    PatientsModule,
    routing,
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
