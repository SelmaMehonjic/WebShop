import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Order } from '../order.model';
import { Store, select } from '@ngrx/store';
import { PageEvent, MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { AuthService } from 'src/app/auth/auth.service';
import { takeWhile } from 'rxjs/operators';
import { Product } from 'src/app/products/product/product.model';
import * as fromProduct from '../../store/product.reducer';
import * as productActions from '../../store/product.action';

@Component({
  selector: 'app-bought',
  templateUrl: './bought.component.html',
  styleUrls: ['./bought.component.css']
})
export class BoughtComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['orderTime', 'product.name', 'amount', 'price', 'sum'];
  dataSource = new MatTableDataSource();
  pageEvent: PageEvent;
  bought: Order[];
  arr: Order[];
  length = 6;
  pageIndex = 0;
  pageSize = 2;
  lowValue = 0;
  highValue = 2;
  filter;
  componentActive = true;
  @ViewChild(MatSort) sort: MatSort;
  product: Product;
  userId;
  constructor(private store: Store<fromProduct.ProductState>,
    private auth: AuthService) { }

  ngOnInit() {
    this.userId = this.auth.getUserId();
    this.store.dispatch(new productActions.GetIsOrder(this.userId));
    this.store.pipe(select(fromProduct.GetIsOrder),
      takeWhile(() => this.componentActive)
    ).subscribe(
      data => {
        this.buildTable(data);
      });

  }

  private buildTable(data) {
    let totalSum = 0;
    this.bought = data;
    let i: number;
    this.dataSource = new MatTableDataSource(this.bought);
    this.dataSource.sort = this.sort;
    for (i = 0; i < this.bought.length; i++) {
      totalSum = totalSum + this.bought[i].sum;
      this.filter = this.bought.filter(val => val === this.bought[i]);
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

  applyFilter(filterValue: string) {
    const inputValue = filterValue.trim().toLowerCase();
    if (inputValue === '') {
      this.store.dispatch(new productActions.GetIsOrder(this.userId));
    } else {
      this.store.dispatch(new productActions.GetOrderBySearch(inputValue));
    }
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
