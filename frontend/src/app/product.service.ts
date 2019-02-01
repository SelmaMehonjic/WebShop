import { HttpClient } from '../../node_modules/@angular/common/http';
import { Injectable } from '../../node_modules/@angular/core';
import { Product } from './products/product/product.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from './category/categories.mode';
import { Order } from './order/order.model';

@Injectable()
export class ProductService {

    url = environment.baseApi;

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get(this.url + 'api/product') as Observable<Product[]>;
    }

    getProductById(id) {
        return this.http.get(this.url + 'api/product/' + id) as Observable<Product>;
    }

    getProductByCategoryId(categoryId) {
        return this.http.get(this.url + 'api/product/category/' + categoryId) as Observable<Product[]>;
    }

    CreateProduct(product) {
        return this.http.post(this.url + 'api/product', product) as Observable<Product>;
    }

    UpdateProduct(product) {
        return this.http.put(this.url + 'api/product', product) as Observable<Product>;
    }

    DeleteProduct(id) {
        return this.http.delete(this.url + 'api/product/' + id) as Observable<Product[]>;
    }

    GetCategories() {
        return this.http.get(this.url + 'api/category') as Observable<Category[]>;
    }

    PostCategory(category) {
        return this.http.post(this.url + 'api/category', category) as Observable<Category>;
    }

    DeleteCategory(id) {
        return this.http.delete(this.url + 'api/category/' + id) as Observable<Category>;
    }

    ToOrder(order) {
        return this.http.post(this.url + 'api/orders', order) as Observable<Order>;
    }

    GetOrder(id) {
        return this.http.get(this.url + 'api/Orders/list/' + id) as Observable<{ orders: Order[], totalSum: number }>;
    }

    IsOrderBuy(id) {
        return this.http.get(this.url + 'api/orders/bought/' + id) as Observable<{ orders: Order[], totalSum: number }>;
    }

    UpdateOrder(order) {
        return this.http.put(this.url + 'api/orders/' + order.id, order) as Observable<Order>;
    }

    DeleteOrder(id) {
        return this.http.delete(this.url + 'api/orders/' + id) as Observable<Order>;
    }

}
