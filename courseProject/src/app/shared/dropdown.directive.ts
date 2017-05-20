import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core'

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {

    @HostBinding ('class.open') isOpen = false;

    constructor(){ }

    @HostListener('click') openDropDown(eventData: Event) {
        this.isOpen = !this.isOpen;
    }
}