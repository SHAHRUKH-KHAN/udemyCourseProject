import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RecipeService } from './../../recipe.service';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() itemsLists = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  showDetails = function(recipe: Recipe) {
    this.recipeService.recipeSelected.emit(recipe);
  }

}
