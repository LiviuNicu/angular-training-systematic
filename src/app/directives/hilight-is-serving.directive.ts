import { Directive, Input, ElementRef } from "@angular/core";

@Directive({
  selector: "[appHilightIsServing]"
})
export class HilightIsServingDirective {
  @Input() isServing;
  constructor(private element: ElementRef) {}
  ngOnInit() {
    if (this.isServing) {
      this.element.nativeElement.style.color = "red";
    }
  }
}
