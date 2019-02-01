import { CanComponentDeactivate } from './../canDeactivate.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '../../../../../node_modules/@angular/router';
import { Observable, Subscription } from '../../../../../node_modules/rxjs';
import * as fromProduct from '../../../store/product.reducer';
import * as productActions from '../../../store/product.action';
import { Store, select } from '@ngrx/store';
import { AuthService } from 'src/app/auth/auth.service';
import { takeWhile } from 'rxjs/operators';
import { Order } from '../../order.model';
@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, CanComponentDeactivate, OnDestroy {
  subscription: Subscription;
  order: Order;
  orderProduct: Order[];
  showForm = false;
  saveChanges = false;
  userId;
  componentActive = true;
  constructor(private route: ActivatedRoute, private router: Router,
    private store: Store<fromProduct.ProductState>, private auth: AuthService) { }

  ngOnInit() {
    this.userId = this.auth.getUserId();
    this.route.params.subscribe(
      (params: Params) => {
        this.store.dispatch(new productActions.GetOrderByproductId(+params['id']));
        this.subscription = this.store.pipe(select(fromProduct.GetOrderByproductId)).subscribe(
          data => this.order = data);
      });
  }

  onShowForm() {
    this.showForm = true;
  }

  OnSubmit() {
    this.onSaveOrder();
    this.store.dispatch(new productActions.GetOrder(this.userId));
    this.store.pipe(select(fromProduct.getOrder),
      takeWhile(() => this.componentActive))
      .subscribe(
        data => {
          this.orderProduct = data;
          const index = this.orderProduct.findIndex(f => f.id === this.order.id);
          this.orderProduct.splice(index, 1);
        });
    this.router.navigate(['favorite']);
  }

  private onSaveOrder() {
    this.saveChanges = true;
    this.order.isOrdered = true;
    this.order.orderDate = new Date();
    this.order.product = null;
    this.order.userId = this.userId;
    this.store.dispatch(new productActions.UpdateOrder(this.order));
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.saveChanges === false) {
      return confirm('do you want to leave?');
    } else {
      return true;
    }
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
