import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  @Input('appStyle') color: any = 'yellow';
  @Input() fontWeight: string = 'normal';
  @Input() directiveStyles: {
    cursor?: string;
    border?: string;
    borderRadius?: string;
  } = { cursor: 'wait', border: '1px solid tomato', borderRadius: 'none' };

  @HostBinding('style.color') elColor = null;

  constructor(private elRef: ElementRef, private render: Renderer2) {
    console.log(this.color);
    console.log(elRef);
    elRef.nativeElement.style.color = 'red';

    setTimeout(() => {
      this.render.setStyle(this.elRef.nativeElement, 'color', 'green');
    }, 2000);
    console.log(this.fontWeight);

    this.render.setStyle(
      this.elRef.nativeElement,
      'cursor',
      this.directiveStyles.cursor
    );
    this.render.setStyle(
      this.elRef.nativeElement,
      'border',
      this.directiveStyles.border
    );
    this.render.setStyle(
      this.elRef.nativeElement,
      'borderRadius',
      this.directiveStyles.borderRadius
    );
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log(this.color);

    this.render.setStyle(this.elRef.nativeElement, 'color', this.color);
    this.render.setStyle(
      this.elRef.nativeElement,
      'fontWeight',
      this.fontWeight
    );
    this.render.setStyle(
      this.elRef.nativeElement,
      'cursor',
      this.directiveStyles.cursor
    );
    this.render.setStyle(
      this.elRef.nativeElement,
      'border',
      this.directiveStyles.border
    );
    this.render.setStyle(
      this.elRef.nativeElement,
      'borderRadius',
      this.directiveStyles.borderRadius
    );

    this.elColor = this.color;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.elRef.nativeElement, 'color', null);
    this.render.setStyle(this.elRef.nativeElement, 'fontWeight', null);
    this.render.setStyle(this.elRef.nativeElement, 'cursor', null);
    this.render.setStyle(this.elRef.nativeElement, 'border', null);
    this.render.setStyle(this.elRef.nativeElement, 'borderRadius', null);
  }
}
