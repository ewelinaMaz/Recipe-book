import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/indredient.model';
import { shoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty schnitzel - just awesome!',
      'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_960_720.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 15)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_960_720.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meet', 1),
        new Ingredient('Tomatoe', 1),
        new Ingredient('Onion', 1),
      ]
    ),
  ];
  constructor(private shoppingListService: shoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addItemToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
