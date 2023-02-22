import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(private elRef: ElementRef, private render: Renderer2) {
    console.log(elRef);
    elRef.nativeElement.style.color = 'red';
    this.render.setStyle(this.elRef.nativeElement, 'color', 'green');
  }
}
