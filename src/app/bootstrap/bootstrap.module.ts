import { NgModule } from '@angular/core';
import { BsDropdownModule, AlertModule, ModalModule,
TabsModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot()
  ],
  declarations: [],
  exports:[
    BsDropdownModule,
    AlertModule,
    ModalModule,
    TabsModule
  ]
})
export class BootstrapModule { }
