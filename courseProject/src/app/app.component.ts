import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showRecipes: boolean=true;
  toggleDisplay = function(event) {
    this.showRecipes = event;
  }
}
