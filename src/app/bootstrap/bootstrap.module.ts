import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class BootstrapModule { }
