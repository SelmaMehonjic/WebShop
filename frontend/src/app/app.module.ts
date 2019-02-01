import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';
import { ProductComponent } from './products/product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { MaterialModule } from './material.module';
import { SidenavListComponent } from './first-page/sidenav-list/sidenav-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StoreModule } from '@ngrx/store';
import { ProductReducer } from './store/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/product.effects';
import { reducers } from './app.store/app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { RegisterComponent } from './register/register.component';
import { BoughtComponent } from './order/bought/bought.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { BasketComponent } from './order/basket/basket.component';
import { OrderDetailsComponent } from './order/basket/order-details/order-details.component';
import { CanDeactivateGuard } from './order/basket/canDeactivate.service';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { AuthGuard } from './auth/AuthGuard';
import { ProductFormComponent } from './products/product-form/product-form.component';
@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    ProductsComponent,
    ProductComponent,
    BasketComponent,
    ProductFormComponent,
    ProductDetailComponent,
    SidenavListComponent,
    OrderDetailsComponent,
    BoughtComponent,
    AddCategoryComponent,
    CategoryListComponent,
    AuthComponent,
    RegisterComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers),
    StoreModule.forFeature('products', ProductReducer),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Shop Devtools',
      logOnly: environment.productson
    })
  ],
  providers: [ProductService, CanDeactivateGuard, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
