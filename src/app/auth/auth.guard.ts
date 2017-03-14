import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService, private router:Router){}
  // Emits data received from AuthService so dashboard component
  // doesn't need to make an extra call to retreive data.

  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.authService.isLoggedIn().map((e:any)=>{
      if (e){
        this.authService.emitName([e.firstName,e.lastName]);
        this.authService.emitUpcomingAppointments(e.upcomingAppointments);
        this.authService.emitFormComplete(e.formComplete);
        return true;
      }
    }).catch(()=>{
      this.router.navigate(['/patients','signin'])
      return Observable.of(false);
    })
  }
}
