import { Recipe } from './../recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() itemsLists = [];
  @Output() displayDetails  = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  showDetails = function(recipe: Recipe) {
    this.displayDetails.emit(recipe);
  }

}
