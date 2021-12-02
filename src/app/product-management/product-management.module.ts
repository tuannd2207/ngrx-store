import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductManagementRoutingModule} from './product-management-routing.module';
import {ProductPageComponent} from './container/product-page/product-page.component';
import {ProductListComponent} from './component/product-list/product-list.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {ProductEffects, productReducer} from "./store";


@NgModule({
  declarations: [
    ProductPageComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects])
  ]
})
export class ProductManagementModule {
}
