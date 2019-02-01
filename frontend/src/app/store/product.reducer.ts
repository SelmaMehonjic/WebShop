import { ProductActionTypes, ProductAction } from './product.action';
import { Product } from '../products/product/product.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Order } from '../order/order.model';
import { Category } from '../category/categories.mode';

export interface ProductState {
    products: Product[];
    selectedProduct: Product | null;
    selectedproductsd: number | null;
    category: Category[] | null;
    error: string;
    ordered: Order | null;
    orders: Order[];
    isOrdered: Order[];
    changeStatus: boolean;
    orderState: boolean | null;
    newCategory: Category | null;
    CategoryState: string | null;
    arrayOfCategoryId: number[];
    Newproduct: Product | null;
    categoryId: number | null;
    tokenState: string;
}
export const InitialState: ProductState = {
    products: [],
    selectedProduct: new Product(),
    selectedproductsd: null,
    category: null,
    error: '',
    ordered: null,
    orders: [],
    isOrdered: [],
    changeStatus: true,
    orderState: null,
    newCategory: null,
    CategoryState: null,
    arrayOfCategoryId: [],
    Newproduct: new Product(),
    categoryId: null,
    tokenState: '0'
};
const getFeatureState = createFeatureSelector<ProductState>('products');
export const getProducts = createSelector(
    getFeatureState,
    state => state.products
);
export const newCategory = createSelector(
    getFeatureState,
    state => state.newCategory
);
export const orderState = createSelector(
    getFeatureState,
    state => state.orderState
);
export const getProductsById = createSelector(
    getFeatureState,
    state => state.Newproduct
);
export const productsd = createSelector(
    getFeatureState,
    state => state.selectedproductsd
);
export const getCategories = createSelector(
    getFeatureState,
    state => state.category
);
export const getOrder = createSelector(
    getFeatureState,
    state => state.orders
);
export const GetOrderByproductId = createSelector(
    getFeatureState,
    state => state.ordered
);
export const GetIsOrder = createSelector(
    getFeatureState,
    state => state.isOrdered
);
export const changeStatus = createSelector(
    getFeatureState,
    state => state.changeStatus
);
export const newproduct = createSelector(
    getFeatureState,
    state => state.Newproduct
);
export const CategoryState = createSelector(
    getFeatureState,
    state => state.CategoryState
);
export const arrayOfCategoryId = createSelector(
    getFeatureState,
    state => state.arrayOfCategoryId
);
export const CategoryId = createSelector(
    getFeatureState,
    state => state.categoryId
);
export const tokenState = createSelector(
    getFeatureState,
    state => state.tokenState
);
export function ProductReducer(state = InitialState, action: ProductAction): ProductState {
    switch (action.type) {
        case ProductActionTypes.LoadSuccess:
            return {
                ...state,
                products: action.payload,
                error: ''
            };
        case ProductActionTypes.GetProductByCategoryByIdSuccess:
            return {
                ...state,
                products: action.payload,
                error: ''
            };
        case ProductActionTypes.GetProductByCategoryByIdFail:
            return {
                ...state,
                error: action.payload
            };
        case ProductActionTypes.GetProductBySearch:
            const filterProducts = [...state.products.filter(val => val.name.indexOf(action.payload) !== -1)];
            return {
                ...state,
                products: filterProducts
            };
        case ProductActionTypes.DeleteProductSuccess:
            return {
                ...state,
                products: state.products.filter(f => f.id !== action.payload)
            };
        case ProductActionTypes.GetProductById:
            return {
                ...state,
                Newproduct: action.payload
            };
        case ProductActionTypes.productsd:
            return {
                ...state,
                selectedproductsd: action.payload
            };
        case ProductActionTypes.LoadCategorySuccess:
            return {
                ...state,
                category: action.payload
            };
        case ProductActionTypes.CreateProductSuccess:
            return {
                ...state,
                Newproduct: action.payload,
                products: [...state.products, action.payload]
            };
        case ProductActionTypes.UpdateProductSuccess:
            return {
                ...state,
                Newproduct: action.payload
            };
        case ProductActionTypes.ToOrderSuccess:
            return {
                ...state,
                ordered: action.payload
            };
        case ProductActionTypes.GetOrderSuccess:
            return {
                ...state,
                orders: action.payload
            };
        case ProductActionTypes.DeleteOrderSuccess:
            return {
                ...state,
            };

        case ProductActionTypes.GetOrderByproductId:
            return {
                ...state,
                ordered: state.orders.find(f => f.productId === action.payload)
            };
        case ProductActionTypes.GetIsOrderSuccess:
            return {
                ...state,
                isOrdered: action.payload
            };
        case ProductActionTypes.UpdateOrderSuccess:
            return {
                ...state,
                ordered: action.payload
            };
        case ProductActionTypes.ToRed:
            return {
                ...state,
                orderState: true
            };
        case ProductActionTypes.ChangeStatus:
            return {
                ...state,
                changeStatus: action.payload
            };
        case ProductActionTypes.Newproduct:
            return {
                ...state,
                Newproduct: action.payload
            };
        case ProductActionTypes.OrderState:
            return {
                ...state,
                orderState: action.payload
            };
        case ProductActionTypes.GetOrderBySearch:
            const filterOrder = [...state.isOrdered.filter(val => val.product.name.indexOf(action.payload) !== -1)];
            return {
                ...state,
                isOrdered: filterOrder
            };
        case ProductActionTypes.CreateCategorySuccess:
            return {
                ...state,
                category: [...state.category, action.payload],
                newCategory: action.payload
            };
        case ProductActionTypes.DeleteCategorySuccess:
            return {
                ...state,
                category: state.category.filter(f => f.id !== action.payload)
            };
        case ProductActionTypes.CategoryState:
            return {
                ...state,
                CategoryState: action.payload
            };
        case ProductActionTypes.ArrayOfCategoryId:
            let index: number[];
            for (let i = 0; i < state.category.length; i++) {
                index = [state.category[i].id];
            }
            return {
                ...state,
                arrayOfCategoryId: index
            };
        case ProductActionTypes.GetProductByCategoryByName:
            const cat = state.category.find(f => f.name === action.payload);
            return {
                ...state,
                categoryId: cat.id
            };
        case ProductActionTypes.TokenState:
            return {
                ...state,
                tokenState: action.payload
            };
        default:
            return state;
    }
}
