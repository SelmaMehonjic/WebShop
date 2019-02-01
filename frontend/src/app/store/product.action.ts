import { Action } from '@ngrx/store';
import { Product } from '../products/product/product.model';
import { Category } from '../category/categories.mode';
import { Order } from '../order/order.model';

export enum ProductActionTypes {
    Load = '[Product] Load',
    LoadSuccess = '[Product] Load Success',
    LoadFail = '[Product] Load Fail',
    GetProductByCategoryById = '[Product] Get Product By Category Id',
    GetProductByCategoryByIdSuccess = '[Product] Get Product By Category Id Success',
    GetProductByCategoryByIdFail = '[Product] Get Product By Category Id Fail',
    GetProductBySearch = '[Product] Get Product By Search',
    DeleteProduct = '[Product] Delete Product',
    DeleteProductSuccess = '[Product] Delete Product Success',
    DeleteProductFail = '[Product] Delete Product Fail',
    UpdateProduct = '[Product] Update Product',
    UpdateProductSuccess = '[Product] Update Product Success',
    UpdateProductFail = '[Product] Update Product Fail',
    CreateProduct = '[Product] Create Product',
    CreateProductSuccess = '[Product] Create Product Success',
    CreateProductFail = '[Product] Create Product Fail',
    GetProductById = '[Product] Get Product By Id',
    productsd = '[Product] Product By ',
    LoadCategory = '[Product] Load Category ',
    LoadCategorySuccess = '[Product] Load Category Success',
    LoadCategoryFail = '[Product] Load Fail Category ',
    ToOrder = '[Product] To Order',
    ToOrderSuccess = '[Product] To Order Success',
    ToOrderFail = '[Product] To Order Fail',
    GetOrder = '[Product] Get Order',
    GetOrderSuccess = '[Product] Get Order Success',
    GetOrderFail = '[Product] Get Order Fail',
    DeleteOrder = '[Product] Delete Order',
    DeleteOrderSuccess = '[Product] Delete Order Success',
    DeleteOrderFail = '[Product] Delete Order Fail',
    GetOrderByproductId = '[Product] GetOrder By productsd ',
    UpdateOrder = '[Product] Update Order',
    UpdateOrderSuccess = '[Product] Update Order Success',
    UpdateOrderFail = '[Product] Update Order Fail',
    GetIsOrder = '[Product] Get Is Order',
    GetIsOrderSuccess = '[Product] Get Is Order Success',
    GetIsOrderFail = '[Product] Get Is Order Fail',
    ToRed = '[Product] To Red',
    ChangeStatus = '[Product] Change Status',
    NewProduct = '[Product] New Product',
    Newproduct = '[Product] New product',
    OrderState = '[Product] Order State',
    GetOrderBySearch = '[Product] Get Order By Search',
    CreateCategory = '[Product] Create Category',
    CreateCategorySuccess = '[Product] Create Category Success',
    CreateCategoryFail = '[Product] Create Category Fail',
    DeleteCategory = '[Product] Delete Category',
    DeleteCategorySuccess = '[Product] Delete Category Success',
    DeleteCategoryFail = '[Product] Delete Category Fail',
    CategoryState = '[Product] Category Boolean',
    ArrayOfCategoryId = '[Product] Array Of Category Id',
    GetProductByCategoryByName = '[Product] Get Product By Category Name',
    newCategory = '[Product] new category',
    TokenState = '[Product] token state'
}
export class TokenState implements Action {
    readonly type = ProductActionTypes.TokenState;
    constructor(public payload: string) { }
}
export class NewCategory implements Action {
    readonly type = ProductActionTypes.newCategory;
    constructor(public payload: Category) { }
}
export class Load implements Action {
    readonly type = ProductActionTypes.Load;
}
export class LoadSucess implements Action {
    readonly type = ProductActionTypes.LoadSuccess;
    constructor(public payload: Product[]) { }
}
export class LoadFail implements Action {
    readonly type = ProductActionTypes.LoadFail;
    constructor(public payload: string) { }
}
export class GetProductByCategoryById implements Action {
    readonly type = ProductActionTypes.GetProductByCategoryById;
    constructor(public payload: number) { }
}
export class GetProductByCategoryByIdSuccess implements Action {
    readonly type = ProductActionTypes.GetProductByCategoryByIdSuccess;
    constructor(public payload: Product[]) { }
}
export class GetProductByCategoryByIdFail implements Action {
    readonly type = ProductActionTypes.GetProductByCategoryByIdFail;
    constructor(public payload: string) { }
}
export class GetProductBySearch implements Action {
    readonly type = ProductActionTypes.GetProductBySearch;
    constructor(public payload: string) { }
}
export class DeleteProduct implements Action {
    readonly type = ProductActionTypes.DeleteProduct;
    constructor(public payload: number) { }
}
export class DeleteProductSuccess implements Action {
    readonly type = ProductActionTypes.DeleteProductSuccess;
    constructor(public payload: number) { }
}
export class DeleteProductFail implements Action {
    readonly type = ProductActionTypes.DeleteProductFail;
    constructor(public payload: string) { }
}
export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.UpdateProduct;
    constructor(public payload: Product) { }
}
export class UpdateProductSuccess implements Action {
    readonly type = ProductActionTypes.UpdateProductSuccess;
    constructor(public payload: Product) { }
}
export class UpdateProductFail implements Action {
    readonly type = ProductActionTypes.UpdateProductFail;
    constructor(public payload: string) { }
}
export class CreateProduct implements Action {
    readonly type = ProductActionTypes.CreateProduct;
    constructor(public payload: Product) { }
}
export class CreateProductSuccess implements Action {
    readonly type = ProductActionTypes.CreateProductSuccess;
    constructor(public payload: Product) { }
}
export class CreateProductFail implements Action {
    readonly type = ProductActionTypes.CreateProductFail;
    constructor(public payload: string) { }
}
export class GetProductById implements Action {
    readonly type = ProductActionTypes.GetProductById;
    constructor(public payload: Product) { }
}
export class ProductId implements Action {
    readonly type = ProductActionTypes.productsd;
    constructor(public payload: number) { }
}
export class LoadCategory implements Action {
    readonly type = ProductActionTypes.LoadCategory;
}

export class LoadCategorySucess implements Action {
    readonly type = ProductActionTypes.LoadCategorySuccess;
    constructor(public payload: Category[]) { }
}

export class LoadCategoryFail implements Action {
    readonly type = ProductActionTypes.LoadCategoryFail;
    constructor(public payload: string) { }
}
export class ToOrder implements Action {
    readonly type = ProductActionTypes.ToOrder;
    constructor(public payload: Order) { }
}
export class ToOrderSuccess implements Action {
    readonly type = ProductActionTypes.ToOrderSuccess;
    constructor(public payload: Order) { }
}
export class ToOrderFail implements Action {
    readonly type = ProductActionTypes.ToOrderFail;
    constructor(public payload: string) { }
}
export class GetOrder implements Action {
    readonly type = ProductActionTypes.GetOrder;
    constructor(public payload: number) { }
}
export class GetOrderSuccess implements Action {
    readonly type = ProductActionTypes.GetOrderSuccess;
    constructor(public payload: Order[]) { }
}
export class GetOrderFail implements Action {
    readonly type = ProductActionTypes.GetOrderFail;
    constructor(public payload: string) { }
}
export class DeleteOrder implements Action {
    readonly type = ProductActionTypes.DeleteOrder;
    constructor(public payload: number) { }
}
export class DeleteOrderSuccess implements Action {
    readonly type = ProductActionTypes.DeleteOrderSuccess;
    constructor(public payload: number) { }
}
export class DeleteOrderFail implements Action {
    readonly type = ProductActionTypes.DeleteOrderFail;
    constructor(public payload: string) { }
}
export class GetOrderByproductId implements Action {
    readonly type = ProductActionTypes.GetOrderByproductId;
    constructor(public payload: number) { }
}
export class UpdateOrder implements Action {
    readonly type = ProductActionTypes.UpdateOrder;
    constructor(public payload: Order) { }
}
export class UpdateOrderSuccess implements Action {
    readonly type = ProductActionTypes.UpdateOrderSuccess;
    constructor(public payload: Order) { }
}
export class UpdateOrderFail implements Action {
    readonly type = ProductActionTypes.UpdateOrderFail;
    constructor(public payload: string) { }
}
export class GetIsOrder implements Action {
    readonly type = ProductActionTypes.GetIsOrder;
    constructor(public payload: number) { }
}
export class GetIsOrderSuccess implements Action {
    readonly type = ProductActionTypes.GetIsOrderSuccess;
    constructor(public payload: Order[]) { }
}
export class GetIsOrderFail implements Action {
    readonly type = ProductActionTypes.GetIsOrderFail;
    constructor(public payload: string) { }
}
export class ToRed implements Action {
    readonly type = ProductActionTypes.ToRed;
}
export class ChangeStatus implements Action {
    readonly type = ProductActionTypes.ChangeStatus;
    constructor(public payload: boolean) { }
}
export class NewProduct implements Action {
    readonly type = ProductActionTypes.NewProduct;
    constructor(public payload: Product) { }
}
export class Newproduct implements Action {
    readonly type = ProductActionTypes.Newproduct;
    constructor(public payload: Product) { }
}
export class OrderState implements Action {
    readonly type = ProductActionTypes.OrderState;
    constructor(public payload: boolean) { }
}
export class GetOrderBySearch implements Action {
    readonly type = ProductActionTypes.GetOrderBySearch;
    constructor(public payload: string) { }
}
export class CreateCategory implements Action {
    readonly type = ProductActionTypes.CreateCategory;
    constructor(public payload: Category) { }
}
export class CreateCategorySuccess implements Action {
    readonly type = ProductActionTypes.CreateCategorySuccess;
    constructor(public payload: Category) { }
}
export class CreateCategoryFail implements Action {
    readonly type = ProductActionTypes.CreateCategoryFail;
    constructor(public payload: string) { }
}
export class DeleteCategory implements Action {
    readonly type = ProductActionTypes.DeleteCategory;
    constructor(public payload: number) { }
}
export class DeleteCategorySuccess implements Action {
    readonly type = ProductActionTypes.DeleteCategorySuccess;
    constructor(public payload: number) { }
}
export class DeleteCategoryFail implements Action {
    readonly type = ProductActionTypes.DeleteCategoryFail;
    constructor(public payload: string) { }
}
export class CategoryState implements Action {
    readonly type = ProductActionTypes.CategoryState;
    constructor(public payload: string) { }
}
export class ArrayOfCategoryId implements Action {
    readonly type = ProductActionTypes.ArrayOfCategoryId;
}
export class GetProductByCategoryByName implements Action {
    readonly type = ProductActionTypes.GetProductByCategoryByName;
    constructor(public payload: string) { }
}
export type ProductAction =
    Load
    | LoadSucess
    | LoadFail
    | GetProductByCategoryById
    | GetProductByCategoryByIdSuccess
    | GetProductByCategoryByIdFail
    | GetProductBySearch
    | DeleteProduct
    | DeleteProductSuccess
    | DeleteProductFail
    | GetProductById
    | ProductId
    | LoadCategory
    | LoadCategorySucess
    | LoadCategoryFail
    | CreateProduct
    | CreateProductSuccess
    | CreateProductFail
    | UpdateProduct
    | UpdateProductSuccess
    | UpdateProductFail
    | ToOrder
    | ToOrderSuccess
    | ToOrderFail
    | GetOrder
    | GetOrderSuccess
    | GetOrderFail
    | DeleteOrder
    | DeleteOrderSuccess
    | DeleteOrderFail
    | GetOrderByproductId
    | GetIsOrder
    | GetIsOrderSuccess
    | GetIsOrderFail
    | UpdateOrder
    | UpdateOrderSuccess
    | UpdateOrderFail
    | ToRed
    | ChangeStatus
    | NewProduct
    | OrderState
    | GetOrderBySearch
    | CreateCategory
    | CreateCategorySuccess
    | CreateCategoryFail
    | DeleteCategory
    | DeleteCategorySuccess
    | DeleteCategoryFail
    | CategoryState
    | ArrayOfCategoryId
    | GetProductByCategoryByName
    | Newproduct
    | NewCategory
    | TokenState;


