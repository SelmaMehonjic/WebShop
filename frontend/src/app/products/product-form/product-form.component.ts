import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../product/product.model';
import { Store, select } from '@ngrx/store';
import * as fromProduct from '../../store/product.reducer';
import * as productActions from '../../store/product.action';
import { takeWhile } from 'rxjs/operators';
import { Category } from 'src/app/category/categories.mode';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit, OnDestroy {
  product = new Product();
  id: number;
  changeStatus: boolean;
  boolean = true;
  categories: Category[];
  componentActive = true;
  constructor(private route: ActivatedRoute, private store: Store<fromProduct.ProductState>,
    private router: Router) { }
  ngOnInit() {
    this.store.dispatch(new productActions.LoadCategory);
    this.store.pipe(select(fromProduct.getCategories)).subscribe(
      data => {
        this.categories = data;
      }
    );
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.store.pipe(select(fromProduct.changeStatus)
        ).subscribe(
          data => {
            this.changeStatus = data;
            this.onCheckStatus(this.changeStatus, this.id);
          });
      });
  }
  private onCheckStatus(status: boolean, id: number) {
    if (status) {
      if (id) {
        this.store.dispatch(new productActions.ProductId(id));
        this.store.pipe(select(fromProduct.getProductsById)).subscribe(
          data => {
            this.product = data;
          }
        );
        this.store.dispatch(new productActions.Newproduct(this.product));
      } else {
        this.store.dispatch(new productActions.Newproduct(new Product()));
      }
    } else {
      this.store.pipe(select(fromProduct.newproduct),
        takeWhile(() => this.componentActive)).subscribe(
          data => {
            this.product = data;
          }
        );
    }
  }
  onclick() {
    if (this.changeStatus) {
      this.store.dispatch(new productActions.ChangeStatus(false));
      this.store.pipe(select(fromProduct.newproduct),
        takeWhile(() => this.componentActive)).subscribe(
          data => {
            this.product = data;
          });
    }
  }
  onClickName(f) {
    this.product.name = f;
    this.store.dispatch(new productActions.Newproduct(this.product));
  }
  onClickprice(f) {
    this.product.price = f;
    this.store.dispatch(new productActions.Newproduct(this.product));
  }
  onClickpicture(f) {
    this.product.picture = f;
    this.store.dispatch(new productActions.Newproduct(this.product));
  }
  onClickdescription(f) {
    this.product.description = f;
    this.store.dispatch(new productActions.Newproduct(this.product));
  }
  onClickCategory(f) {
    this.product.categoryId = f;
    this.store.dispatch(new productActions.Newproduct(this.product));
  }
  onSubmit() {
    this.boolean = false;
    if (this.id) {
      this.store.dispatch(new productActions.UpdateProduct(this.product));
    } else {
      this.store.dispatch(new productActions.CreateProduct(this.product));
    }
    this.store.dispatch(new productActions.ChangeStatus(true));
    this.router.navigate(['/']);
    this.product = new Product();
    this.componentActive = false;
  }
  AddCategory() {
    this.store.dispatch(new productActions.CategoryState('addCategory'));
  }
  ngOnDestroy() {
    if (!this.changeStatus) {
      this.store.dispatch(new productActions.Newproduct(this.product));
    }
  }
}
