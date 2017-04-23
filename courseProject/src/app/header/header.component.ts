import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    
    @Output() displayRecipe = new EventEmitter<boolean>();
   
    showRecipe = function() {
        this.displayRecipe.emit(true);
    }

    showShoppingList = function() {
        this.displayRecipe.emit(false);
    }
}