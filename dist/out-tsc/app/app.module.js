var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            NavComponent,
            DashboardComponent,
            HomeComponent,
            ScheduleComponent,
            RegisterComponent
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
], AppModule);
export { AppModule };
//# sourceMappingURL=../../../src/app/app.module.js.map