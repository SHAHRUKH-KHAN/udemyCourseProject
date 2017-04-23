import { Recipe } from './recipe-list/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  showUp = function(data: Recipe) {
    this.itemEl = data;
  }

}
