import { NgModule } from '@angular/core';
import { BsDropdownModule, AlertModule, ModalModule,
TabsModule, CollapseModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    CollapseModule.forRoot()
  ],
  declarations: [],
  exports:[
    BsDropdownModule,
    AlertModule,
    ModalModule,
    TabsModule,
    CollapseModule
  ]
})
export class BootstrapModule { }
