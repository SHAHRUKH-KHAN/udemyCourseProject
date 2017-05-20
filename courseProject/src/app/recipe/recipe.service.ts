import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe-list/recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'Simple Test', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--1274488_8.jpg?itok=vS12pL7b'),
        new Recipe('Test Recipe', 'Second one', 'http://images.indianexpress.com/2014/07/masala-baby-potatoes.jpg?w=820?w=608')
    ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
      //this will return the copy of upper private variable
      return this.recipes.slice(); 
  }
}