import { Directive, HostBinding } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({

  selector: '[border]'
})

export class BorderDirective{

  constructor(public ngcontrol: NgControl) {

  }

  @HostBinding('style.border-color')

  getBorderColorCSS() {
    console.log(this.ngcontrol.status)
    return this.ngcontrol.status;

  }
}
