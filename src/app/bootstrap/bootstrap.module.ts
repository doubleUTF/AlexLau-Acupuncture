import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CollapseModule.forRoot()
  ],
  declarations: [],
  exports:[
    CollapseModule
  ]
})
export class BootstrapModule { }
