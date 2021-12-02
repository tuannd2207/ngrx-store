import {createAction, props} from '@ngrx/store';
import {Product} from "../model/product.model";
export const loadProducts = createAction(
  '[Product API] Load Product List',
  props<{ body: any }>()
);
export const loadProductsSuccess = createAction(
  '[Product API] Load Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product API] Load Fail',
  props<{ error: string }>()
);
export const clearState = createAction(
  '[Clear state] clear state',
  props<{ fields: string[] }>()
);
