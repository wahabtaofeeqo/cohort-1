import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[logme]'
})
export class LogMeDirective {

  constructor(private element: ElementRef) { }

  @HostListener('click')
  onClick() {
    console.log("I'm been clicked just now!", this.element.nativeElement);
  }
}
