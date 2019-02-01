
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as fromProduct from '../../store/product.reducer';
import * as productActions from '../../store/product.action';
import { Store, select } from '@ngrx/store';
import { AuthService } from 'src/app/auth/auth.service';
import { Order } from '../order.model';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  orderProduct: Order[];
  @ViewChild('f') f: NgForm;
  userId;
  constructor(private router: Router, private store: Store<fromProduct.ProductState>, private auth: AuthService) { }

  ngOnInit() {
    this.userId = this.auth.getUserId();
    this.store.dispatch(new productActions.GetOrder(this.userId));
    this.store.pipe(select(fromProduct.getOrder)).subscribe(
      data => this.orderProduct = data
      );
  }

  Ukloni(br) {
    this.store.dispatch(new productActions.DeleteOrder(br.id));
    const index = this.orderProduct.findIndex(f => f.id === br.id);
    this.orderProduct.splice(index, 1);
  }
  buy(or) {
    this.router.navigate(['favorite', or.productId]);
  }
}
