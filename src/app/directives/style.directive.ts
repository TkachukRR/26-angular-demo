import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(private elRef: ElementRef, private render: Renderer2) {
    console.log(elRef);
    elRef.nativeElement.style.color = 'red';
    setTimeout(() => {
      this.render.setStyle(this.elRef.nativeElement, 'color', 'green');
    }, 3000);
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.render.setStyle(this.elRef.nativeElement, 'color', 'blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.elRef.nativeElement, 'color', null);
  }
}
