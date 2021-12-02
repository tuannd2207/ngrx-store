import {Injectable} from '@angular/core';
import {mergeMap, map, catchError, concatMap} from 'rxjs/operators';
import {of} from 'rxjs';
/* NgRx */
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as productAction from './product.action';
import {ProductService} from "../service/product.service";

@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private productService: ProductService) {
  }

  loadProducts$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(productAction.loadProducts),
        mergeMap((action: any) => this.productService.getProducts(action.body)
          .pipe(
            map(products => productAction.loadProductsSuccess({products})),
            catchError(error => of(productAction.loadProductsFailure({error})))
          )
        )
      );
  });
}
