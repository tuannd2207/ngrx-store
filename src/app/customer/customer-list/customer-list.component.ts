import { Component, OnInit } from '@angular/core';
import {selectProductSuccess} from "../../product-management/store";
import {Observable, Subject} from "rxjs";
import {Product} from "../../product-management/model/product.model";
import {State, Store} from "@ngrx/store";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  productList$: Observable<Product[]> | undefined;
  constructor(private store: Store<State<any>>) { }

  ngOnInit(): void {
    this.productList$ = this.store.select(selectProductSuccess);
    const unSub = new Subject<void>();
    this.productList$.pipe(takeUntil(unSub)).subscribe(res => {
      console.log(res);
    });
  }

}
