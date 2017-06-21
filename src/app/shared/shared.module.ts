import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FocusDirective } from '../directives/focus.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FooterComponent,
    FocusDirective,
  ],
  exports:[
    FooterComponent,
    FocusDirective,
  ]
})
export class SharedModule { }
