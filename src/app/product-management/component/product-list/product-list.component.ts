import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../model/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] | undefined;
  @Output() clearState = new EventEmitter<any>();

  @Input() set productListFunc(data: Product[]) {
    this.productList = data;
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  clear() {
    this.clearState.emit();
  }
}
