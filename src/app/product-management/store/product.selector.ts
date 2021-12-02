import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProductState} from "./product.reducer";

const getProductFeatureState = createFeatureSelector<ProductState>('products');
export const selectProductSuccess = createSelector(
  getProductFeatureState,
  (state) => state.products
);
