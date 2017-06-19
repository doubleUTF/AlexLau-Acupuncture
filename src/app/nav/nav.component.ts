import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

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
  isCollapsed=true;

  isLoggedIn(){
    return localStorage.getItem('token') !== null;
  };

  ngOnInit() {
  }

  updateMenuTitle(){
    if (!this.firstName || !this.lastName){
      return 'Menu'
    }
    return this.firstName+ ' '+ this.lastName
  }

  onSignOut(){
    this.authService.signOut();
    this.firstName,this.lastName='',''
    this.updateMenuTitle();
  }

  ngDoCheck(){
    this.updateMenuTitle();
  }

  dropdownOpen=false;
  isOpenChange(): void {
    this.dropdownOpen=!this.dropdownOpen;
 }
}
