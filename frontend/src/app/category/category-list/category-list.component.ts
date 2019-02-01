import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromProduct from '../../store/product.reducer';
import * as productActions from '../../store/product.action';
import { Store, select } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material';
import { takeWhile } from 'rxjs/operators';
import { Category } from '../categories.mode';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['naziv', 'opisKategorije'];
  categories: Category[];
  dataSource = new MatTableDataSource();
  componentActive = true;
  constructor(private store: Store<fromProduct.ProductState>) { }

  ngOnInit() {
  this.getCategories();
  }

  private getCategories() {
    this.store.dispatch(new productActions.CategoryState('categoryList'));
    this.store.dispatch(new productActions.LoadCategory);
    this.store.pipe(select(fromProduct.getCategories),
      takeWhile(() => this.componentActive)
    ).subscribe(
      data => {
      this.categories = data;
        this.dataSource = new MatTableDataSource(this.categories);
      }
    );
  }

  Delete(id) {
    this.store.dispatch(new productActions.DeleteCategory(id));
  }

  news() {
    this.store.dispatch(new productActions.CategoryState('categoryList'));
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

}
