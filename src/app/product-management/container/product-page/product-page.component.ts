import {Component, OnInit} from '@angular/core';
import {State, Store} from "@ngrx/store";
import {clearState, loadProducts, selectProductSuccess} from "../../store";
import {Observable, Subject} from "rxjs";
import {Product} from "../../model/product.model";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  productList$: Observable<Product[]> | undefined;
  productList: Product[] = [];

  constructor(private store: Store<State<any>>) {
  }

  ngOnInit(): void {
    const body: any = {
      body: ''
    };
    this.store.dispatch(loadProducts(body));
    this.productList$ = this.store.select(selectProductSuccess);
    const unSub = new Subject<void>();
    this.productList$.pipe(takeUntil(unSub)).subscribe(res => {
      if (res && res.length > 0) {
        this.productList = res;
        unSub.next();
        unSub.complete();
      }
    });

  }

  clear() {
    const clearrr = ['products'];
    this.store.dispatch(clearState({fields: clearrr}));
  }
}
