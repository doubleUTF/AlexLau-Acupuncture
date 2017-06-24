import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  isLoggedIn(){
    return localStorage.getItem('token') !== null;
  };

  ngOnInit() {
    if (this.isLoggedIn()){
      setTimeout(()=>this.router.navigate(['/patients','dashboard']))
    }
  }

  image='../../assets/zen.jpg';
  defaultImage='../../assets/zen_tiny.jpg';
}
