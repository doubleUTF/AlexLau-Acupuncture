import { NgModule } from '@angular/core';
import { DropdownModule, AlertModule, ModalModule,
TabsModule } from 'ng2-bootstrap';

@NgModule({
  imports: [
    DropdownModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot()
  ],
  declarations: [],
  exports:[
    DropdownModule,
    AlertModule,
    ModalModule,
    TabsModule
  ]
})
export class BootstrapModule { }
