import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/indredient.model';
import { shoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private shopService: shoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shopService.getIngredients();
    this.subscription = this.shopService.ingedientsChanged
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }
  onEditItem(index: number) {
    this.shopService.startingEditing.next(index);
  }
  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}
