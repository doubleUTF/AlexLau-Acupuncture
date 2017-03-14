import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService:AuthService, private router:Router){}

  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.authService.isLoggedIn().map((e:any)=>{
      if (e){
        this.authService.emitName([e.firstName,e.lastName]);
        this.authService.emitUpcomingAppointments(e.upcomingAppointments);
        return true;
      }
    }).catch(()=>{
      this.router.navigate(['/patients','signin'])
      return Observable.of(false);
    })
  }
}
