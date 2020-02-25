import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe-model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() selectedRecipeDetial = new EventEmitter<any>();
  recipes: Recipe[] = [
    new Recipe('test', 'To test the description',
    'https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg'),
    new Recipe('test', 'To test the description',
    'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg'),
    new Recipe('test', 'To test the description',
    'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg')];

  constructor() { }
  selectedRecipe(recipe: Recipe) {
    this.selectedRecipeDetial.emit(recipe);
    console.log(recipe);
  }
  ngOnInit() {
  }

}
