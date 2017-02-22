import { NgModule } from '@angular/core';
import { DropdownModule, AlertModule, ModalModule,
         ModalDirective } from 'ng2-bootstrap';

@NgModule({
  imports: [
    DropdownModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
  ],
  declarations: [],
  exports:[
    DropdownModule,
    AlertModule,
    ModalModule,
    ModalDirective
  ]
})
export class BootstrapModule { }
