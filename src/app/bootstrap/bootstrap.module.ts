import { NgModule } from '@angular/core';
import { DropdownModule, AlertModule } from 'ng2-bootstrap';

@NgModule({
  imports: [
    DropdownModule.forRoot(),
    AlertModule.forRoot()
  ],
  declarations: [],
  exports:[
    DropdownModule,
    AlertModule
  ]
})
export class BootstrapModule { }
