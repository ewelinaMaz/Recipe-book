import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ShopingEditComponent } from './shoping-edit/shoping-edit.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShopingEditComponent],
  imports: [
    RouterModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    ShoppingListRoutingModule,
  ],
})
export class ShoppingListModule {}
