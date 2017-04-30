import { Ingredients } from './../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [new Ingredients('Apple',5),
  new Ingredients('Oranges',10)];

  constructor() { }

  ngOnInit() {
  }

  addIng = function(ing: Ingredients) {
    this.ingredients.push(ing);
  }

}
