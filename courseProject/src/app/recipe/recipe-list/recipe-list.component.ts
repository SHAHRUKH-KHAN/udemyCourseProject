import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Simple Test', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--1274488_8.jpg?itok=vS12pL7b'),
    new Recipe('Test Recipe', 'Second one', 'http://images.indianexpress.com/2014/07/masala-baby-potatoes.jpg?w=820?w=608')
  ];

  constructor() { }

  ngOnInit() {
  }

}
