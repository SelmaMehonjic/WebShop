import { Injectable } from '@angular/core';
import { ProductService } from '../product.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import * as productAction from './product.action';
import { Action } from '@ngrx/store';
import { Product } from '../products/product/product.model';
import { Order } from '../order/order.model';
@Injectable()
export class ProductEffects {
  constructor(private productService: ProductService, private action$: Actions) { }
  @Effect()
  loadProducts$: Observable<Action> = this.action$.pipe(
    ofType(productAction.ProductActionTypes.Load),
    mergeMap(action =>
      this.productService.getProducts().pipe(
        map(products => (new productAction.LoadSucess(products))),
        catchError(err => of(new productAction.LoadFail(err)))
      )
    )
  );
  @Effect()
  filterById$: Observable<Action> = this.action$.pipe(
    ofType(productAction.ProductActionTypes.GetProductByCategoryById),
    map((action: productAction.GetProductByCategoryById) => action.payload),
    mergeMap((num: number) => this.productService.getProductByCategoryId(num).pipe(
      map(products => (new productAction.GetProductByCategoryByIdSuccess(products)))
    ))
  );
  @Effect()
  deleteProduct$: Observable<Action> = this.action$.pipe(
    ofType(productAction.ProductActionTypes.DeleteProduct),
    map((action: productAction.DeleteProduct) => action.payload),
    mergeMap((num: number) => this.productService.DeleteProduct(num).pipe(
      map(() => (new productAction.DeleteProductSuccess(num)))
    ))
  );
  @Effect()
  getProductById$: Observable<Action> = this.action$.pipe(
    ofType(productAction.ProductActionTypes.productsd),
    map((action: productAction.GetProductById) => action.payload),
    mergeMap((num: number) => this.productService.getProductById(num).pipe(
      map(product => (new productAction.GetProductById(product)))
    ))
  );
  @Effect()
  loadCategories$: Observable<Action> = this.action$.pipe(
    ofType(productAction.ProductActionTypes.LoadCategory),
    mergeMap(action =>
      this.productService.GetCategories().pipe(
        map(products => (new productAction.LoadCategorySucess(products))),
      )
    )
  );
  @Effect()
  updateProduct$: Observable<Action> = this.action$.pipe(
    ofType(productAction.ProductActionTypes.UpdateProduct),
    map((action: productAction.UpdateProduct) => action.payload),
    mergeMap((product: Product) => this.productService.UpdateProduct(product).pipe(
      map(product => (new productAction.UpdateProductSuccess(product)))
    ))
  );
  @Effect()
  createProduct$: Observable<Action> = this.action$.pipe(
    ofType(productAction.ProductActionTypes.CreateProduct),
    map((action: productAction.CreateProduct) => action.payload),
    mergeMap(action =>
      this.productService.CreateProduct(action).pipe(
        map(products => (new productAction.CreateProductSuccess(products))),
      )
    )
  );
  @Effect()
  toOrder$: Observable<Action> = this.action$.pipe(
    ofType(productAction.ProductActionTypes.ToOrder),
    map((action: productAction.ToOrder) => action.payload),
    mergeMap(action =>
      this.productService.ToOrder(action).pipe(
        map(order => (new productAction.ToOrderSuccess(order))),
      )
    )
  );
  @Effect()
  getOrder$: Observable<Action> = this.action$.pipe(
    ofType(productAction.ProductActionTypes.GetOrder),
    map((action: productAction.GetOrder) => action.payload),
    mergeMap((num: number) =>
      this.productService.GetOrder(num).pipe(
        map(products => (new productAction.GetOrderSuccess(products.orders)),
        )
      )
    ));
  @Effect()
  deleteOrder$: Observable<Action> = this.action$.pipe(
    ofType(productAction.ProductActionTypes.DeleteOrder),
    map((action: productAction.DeleteOrder) => action.payload),
    mergeMap((num: number) => this.productService.DeleteOrder(num).pipe(
      map(() => (new productAction.DeleteOrderSuccess(num)))
    ))
  );
  @Effect()
  updateOrder$: Observable<Action> = this.action$.pipe(
    ofType(productAction.ProductActionTypes.UpdateOrder),
    map((action: productAction.UpdateOrder) => action.payload),
    mergeMap((order: Order) => this.productService.UpdateOrder(order).pipe(
      map(order => (new productAction.UpdateOrderSuccess(order)))
    ))
  );
  @Effect()
  getIsOrder$: Observable<Action> = this.action$.pipe(
    ofType(productAction.ProductActionTypes.GetIsOrder),
    map((action: productAction.GetIsOrder) => action.payload),
    mergeMap((num: number) =>
      this.productService.IsOrderBuy(num).pipe(
        map(products => (new productAction.GetIsOrderSuccess(products.orders)),
        )
      )
    ));
  @Effect()
  createCategory$: Observable<Action> = this.action$.pipe(
    ofType(productAction.ProductActionTypes.CreateCategory),
    map((action: productAction.CreateCategory) => action.payload),
    mergeMap(action =>
      this.productService.PostCategory(action).pipe(
        map(products => (new productAction.CreateCategorySuccess(products))),
      )
    )
  );
  @Effect()
  deleteCategory$: Observable<Action> = this.action$.pipe(
    ofType(productAction.ProductActionTypes.DeleteCategory),
    map((action: productAction.DeleteCategory) => action.payload),
    mergeMap((num: number) => this.productService.DeleteCategory(num).pipe(
      map(() => (new productAction.DeleteCategorySuccess(num)))
    ))
  );
}
