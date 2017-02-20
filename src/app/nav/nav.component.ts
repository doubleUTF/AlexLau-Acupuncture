import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) { }

  private isLoggedIn(){
    return this.authService.isLoggedIn()
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
    this.router.navigate(['/patient','signin'])
  }


}
