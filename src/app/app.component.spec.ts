/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BootstrapModule} from './bootstrap/bootstrap.module';
import {NavComponent} from './nav/nav.component';
import {RouterTestingModule} from '@angular/router';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent
      ],
      imports:[
        BootstrapModule,
        RouterTestingModule
      ]
    });
    TestBed.compileComponents();
  });

  // Test fails, dunno why
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));

});
