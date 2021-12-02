/* NgRx */
import {createReducer, on} from '@ngrx/store';
import * as ProductAction from './product.action';
import {Product} from "../model/product.model";

const demo = [1, 23, 232, 32, 323, 23, 23, 23, 23, 23, 23,];

// State for this feature (Product)
export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
  isLoading: boolean;
  demo: number[];
}

const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: '',
  isLoading: false,
  demo: []
};

export const productReducer = createReducer<ProductState>(
  initialState,
  on(ProductAction.loadProductsSuccess, (state, {products}): ProductState => {
    return {
      ...state,
      products: products,
      error: '',
      isLoading: false,
      demo: demo
    };
  }),
  on(ProductAction.loadProductsFailure, (state, action): ProductState => {
    return {
      ...state,
      products: [],
      error: action.error,
      isLoading: false,
    };
  }),
  on(ProductAction.clearState, (state, {fields}): ProductState => {
      // @ts-ignore
    fields?.forEach(f => fields[f] = null);
      return (
        {
          ...state,
        });
    },
  ),
  on(ProductAction.loadProducts, state => ({
    ...state,
    errors: null,
    isLoading: true,
  })),
  // After a create, the currentProduct is the new product.
);
