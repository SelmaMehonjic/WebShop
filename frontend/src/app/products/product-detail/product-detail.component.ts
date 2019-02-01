import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../product/product.model';
import { NgForm } from '@angular/forms';
import * as fromProduct from '../../store/product.reducer';
import * as productActions from '../../store/product.action';
import { Store, select } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { Order } from 'src/app/order/order.model';

// folder i komponent bi trebalo da se zove product-detail(s)
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  detail: Product;
  id: number;
  show = false;
  comm: string;
  order = new Order();
  ord: Order;
  red = false;

  @ViewChild('f') comment: NgForm;
  arr: Order[];
  componentActive = true;
  userId;
  constructor(private route: ActivatedRoute, private store: Store<fromProduct.ProductState>,
    private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.userId = this.auth.getUserId();
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.getProduct(this.id);
        this.getOrders(this.userId, this.id);
      }
    );
  }

  private getProduct(id: number) {
    this.store.dispatch(new productActions.ProductId(id));
    this.store.pipe(select(fromProduct.getProductsById),
      takeWhile(() => this.componentActive)
    ).subscribe(
      data => this.detail = data
    );
  }

  private getOrders(userId: number, id: number) {
    this.store.dispatch(new productActions.GetOrder(userId));
    this.store.pipe(select(fromProduct.getOrder),
      takeWhile(() => this.componentActive)
    ).subscribe(
      data => {
        this.arr = data;
        const num = this.arr.find(f => f.productId === id);
        if (num) {
          this.red = true;
        }
      });
  }

  basket() {
    this.red = true;
    this.store.dispatch(new productActions.ToRed);
    this.order.productId = this.id;
    this.order.userId = this.userId;
    this.order.isOrdered = false;
    this.order.amount = 0;
    this.order.sum = 0;
    this.order.orderDate = new Date();
    const number = this.arr.find(f => f.productId === this.id);
    if (!number) {
      this.store.dispatch(new productActions.ToOrder(this.order));
      this.router.navigate(['detail', this.id]);
    }
  }

  onSubmit() {
    this.show = true;
    this.comm = this.comment.value.comment;
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
