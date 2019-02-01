import { NgModule } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { BasketComponent } from './order/basket/basket.component';
import { OrderDetailsComponent } from './order/basket/order-details/order-details.component';
import { CanDeactivateGuard } from './order/basket/canDeactivate.service';
import { BoughtComponent } from './order/bought/bought.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { AuthGuard } from './auth/AuthGuard';
import { ProductFormComponent } from './products/product-form/product-form.component';
const AppRoutes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'detail/:id', component: ProductDetailComponent },
    {
        path: 'favorite', component: BasketComponent,
        children: [{ path: ':id', component: OrderDetailsComponent,
         canDeactivate: [CanDeactivateGuard] }]
    },
    {   path: 'update', canActivate: [AuthGuard], component:ProductFormComponent,
    },
    {
        path: 'update/:id', canActivate: [AuthGuard], component: ProductFormComponent,
    },
    { path: 'bought', component: BoughtComponent },
    { path: 'addCategory', canActivate: [AuthGuard],
    component: AddCategoryComponent, canActivateChild: [AuthGuard],
     children: [{ path: '', component: ProductFormComponent }] },
    { path: 'categoryList',  canActivate: [AuthGuard], component: CategoryListComponent },

    { path: 'auth', component: AuthComponent },
    { path: 'register', component: RegisterComponent }
];
@NgModule({
    imports: [
        RouterModule.forRoot(AppRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
