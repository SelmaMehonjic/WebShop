import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromProduct from '../../store/product.reducer';
import * as productActions from '../../store/product.action';
import { Store, select } from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs/operators';
import { Category } from '../categories.mode';
import { Product } from 'src/app/products/product/product.model';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit, OnDestroy {
  categories: Category[];
  category = new Category();
  categoryState: string;
  findCategory: Category;

  show = false;
  showForm = false;
  showMultipleSelect = false;
  changeCategoryofProduct = false;
  componentActive = true;
  changeStatus: boolean;

  newproduct;
  selectedProduct: Product[];
  productList: Product[];

  id: number;
  num: number;
  constructor(private store: Store<fromProduct.ProductState>,
    private router: Router) { }

  ngOnInit() {
    this.store.pipe(select(fromProduct.newproduct)).subscribe(
      data => this.newproduct = data
    );

    this.getCategoryState();
    this.getCategories();

  }
  private getCategoryState() {
    this.store.pipe(select(fromProduct.CategoryState),
      takeWhile(() => this.componentActive)
    ).subscribe(
      data => {
        this.categoryState = data;
      }
    );
  }
  private getCategories() {
    this.store.pipe(select(fromProduct.getCategories),
      takeWhile(() => this.componentActive)).subscribe(
        data => {
          this.categories = data;
        }
      );
    this.store.dispatch(new productActions.LoadCategory);
  }

  onSubmit() {
    this.show = true;
    this.store.dispatch(new productActions.CreateCategory(this.category));
    this.onCheckCategoryState(this.categoryState);
  }
  newProducts() {
    this.findCategory = this.categories.find(f => f.name === this.category.name);
    this.showForm = true;
    this.newproduct.categoryId = this.findCategory.id;
  }

  private onCheckCategoryState(categoryState: string) {
    if (categoryState === 'addCategory') {
      this.store.dispatch(new productActions.CreateCategorySuccess(this.category));
      this.store.pipe(select(fromProduct.newCategory)).subscribe(
        data => {
          this.newproduct.categoryId = data.id;
          this.store.dispatch(new productActions.Newproduct(this.newproduct));
        }
      );
      this.store.pipe(select(fromProduct.getProductsById),
        takeWhile(() => this.componentActive)).subscribe(
          data => {
            data.id ? this.router.navigate(['/update', data.id]) : this.router.navigate(['/update']);
          }
        );
    } else if (categoryState === 'categoryList') {
      this.router.navigate(['/categoryList']);
    }
  }

  changeCategory() {
    this.showMultipleSelect = true;
    this.store.dispatch(new productActions.Load);
    this.store.pipe(select(fromProduct.getProducts),
      takeWhile(() => this.componentActive))
      .subscribe(
        data => this.productList = data
      );
  }

  onChangeCategoryOfProduct() {
    this.changeCategoryofProduct = true;
  }

  save() {
    this.findCategory = this.categories.find(f => f.name === this.category.name);
    for (let i = 0; i < this.selectedProduct.length; i++) {
      this.selectedProduct[i].categoryId = this.findCategory.id;
      this.store.dispatch(new productActions.UpdateProduct(this.selectedProduct[i]));
    }
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
