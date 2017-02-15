import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './dashboard/schedule/schedule.component';
import { RegisterComponent } from './auth/register/register.component';
var APP_ROUTES = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'register', component: RegisterComponent }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=../../../src/app/app.routing.js.map