import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCP_Vy7_B9ESJi11tTb58XKlLT-iR4aOMY'
    })
  ],
  declarations: [
    FooterComponent,
  ],
  exports:[
    FooterComponent,
    AgmCoreModule,
    CommonModule
  ]
})
export class SharedModule { }
