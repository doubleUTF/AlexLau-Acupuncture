import { Injectable } from '@angular/core';

@Injectable()
export class TimeService {

  constructor() { }

  getYearsPracticing(){
    let currentYear=new Date().getFullYear();
    const yearStarted=2001
    return currentYear-yearStarted
  }

  getCurrentYear(){
    return new Date().getFullYear()
  }
}
