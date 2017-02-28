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

  constructor(private router:Router, private authService:AuthService) {
  authService.name$.subscribe(
    nameSource=>{
      this.firstName=nameSource[0];
      this.lastName=nameSource[1];
      this.updateMenuTitle();
    }
  ) }

  firstName:string='';
  lastName:string='';

  isLoggedIn(){
    return localStorage.getItem('token') !== null;
  };

  ngOnInit() {
    if (this.isLoggedIn()){
      this.firstName=localStorage.getItem('firstName');
      this.lastName=localStorage.getItem('lastName');
    }
  }

  updateMenuTitle(){
    if (!this.firstName || !this.lastName){
      return 'Menu'
    }
    return this.firstName+ ' '+ this.lastName[0]+'.'
  }

  onSignOut(){
    this.authService.signOut();
    this.firstName,this.lastName='',''
    this.updateMenuTitle();
  }

}
