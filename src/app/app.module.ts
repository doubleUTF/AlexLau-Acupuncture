import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { routing } from './app.routing';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    BootstrapModule,
    SharedModule,
    HomeModule,
    routing,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
