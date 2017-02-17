import { Directive, Input, EventEmitter, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[focus]'
})
export class FocusDirective {
  @Input('focus') focusEvent:EventEmitter<boolean>;
  constructor(
    private element:ElementRef,
    private renderer:Renderer
  ) { }

  ngOnInit(){
    this.focusEvent.subscribe(event=>{
      this.renderer.invokeElementMethod(this.element.nativeElement,'focus');
    })
  }
}
