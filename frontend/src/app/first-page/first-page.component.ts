import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as fromProduct from '../store/product.reducer';
import * as productActions from '../store/product.action';
import { Store, select } from '@ngrx/store';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Order } from '../order/order.model';
@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css',
  ]
})
export class FirstPageComponent implements OnInit {
  // bool: boolean;
  order: Order[];
  userId;

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(
    private store: Store<fromProduct.ProductState>,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.userId = this.auth.getUserId();
    this.store.dispatch(new productActions.TokenState(this.userId));
    // this.store.pipe(select(fromProduct.orderState)).subscribe(
    //   data => this.bool = data
    // );
    this.store.dispatch(new productActions.GetIsOrder(this.userId));
  }

  loggedIn() {
    return this.auth.loggedIn();
  }

  loggedOut() {
    this.auth.logOut();
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

}

