import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) { }

  private isLoggedIn():Observable<boolean>|boolean{
    return this.authService.isLoggedIn().map(e=>{
      if (e){
        return true;
      }
    }).catch(()=>{
      this.router.navigate(['/patients','signin'])
      return Observable.of(false);
    })
  }

  ngOnInit() {
  }

  onSignOut(){
    this.authService.signOut()
    .subscribe(
      data=>console.log(data),
      err=>console.error(err)
    );
    localStorage.clear();
    this.router.navigate(['/patients','signin'])
  }


}
