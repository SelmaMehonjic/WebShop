import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Product } from './product/product.model';
import { FormControl } from '@angular/forms';
import * as fromProduct from '../store/product.reducer';
import { Store, select } from '@ngrx/store';
import * as productActions from '../store/product.action';
import { PageEvent } from '@angular/material';
import { takeWhile } from 'rxjs/operators';
import { Category } from '../category/categories.mode';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  pageEvent: PageEvent;

  products: Product[];
  myControl = new FormControl();
  length = 5;
  pageIndex = 0;
  pageSize = 4;
  lowValue = 0;
  highValue = 4;
  categories: Category[];
  categoryId: number;
  componentActive = true;
  isUserAdmin: boolean;
  sortArray: string[] = ['cijena opadajuce', 'cijena rastuce'];

  @ViewChild('paginator') paginator;

  constructor(private store: Store<fromProduct.ProductState>, private auth: AuthService) { }

  ngOnInit(): void {
    this.isUserAdmin = this.auth.isUserAdmin();
    this.getProducts();
    this.getCategories();
  }

  private getProducts() {
    this.store.dispatch(new productActions.Load());
    this.store.pipe(select(fromProduct.getProducts),
      takeWhile(() => this.componentActive))
      .subscribe(
        data => {
          this.products = data;
        }
      );
  }

  private getCategories() {
    this.store.dispatch(new productActions.LoadCategory);
    this.store.pipe(select(fromProduct.getCategories),
      takeWhile(() => this.componentActive)
    ).subscribe(
      data => {
        this.categories = data;
      }
    );
  }

  private setToDefault() {
    this.paginator.pageIndex = 0;
    this.paginator.previousPageIndex = 0;
    this.pageIndex = 0;
    this.lowValue = 0;
    this.highValue = 4;
  }

  onChangeTab(value) {
    this.setToDefault();
    if (value.index === 0) {
      this.store.dispatch(new productActions.Load());
    } else {
      this.store.dispatch(new productActions.GetProductByCategoryByName(value.tab.textLabel));
      this.store.pipe(select(fromProduct.CategoryId),
        takeWhile(() => this.componentActive)
      ).subscribe(
        data => {
          this.categoryId = data;
          this.store.dispatch(new productActions.GetProductByCategoryById(this.categoryId));
        }
      );
    }

  }

  onSearch(checkValue) {
    this.setToDefault();
    const toLower = checkValue.toLowerCase();
    if (toLower === '') {
      this.store.dispatch(new productActions.Load());
    } else {
      this.store.dispatch(new productActions.GetProductBySearch(toLower));
    }
  }

  getPaginatorData(event) {
    if (event.pageIndex === this.pageIndex + 1) {
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue = this.highValue + this.pageSize;
    } else if (event.pageIndex === this.pageIndex - 1) {
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue = this.highValue - this.pageSize;
    }
    this.pageIndex = event.pageIndex;
  }

  onDelete(id: number) {
    this.store.dispatch(new productActions.DeleteProduct(id));
  }

  onSort(sortOption) {
    this.products.sort((a, b) =>
      sortOption === 'cijena rastuce'
        ? a.price - b.price
        : b.price - a.price
    );
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
