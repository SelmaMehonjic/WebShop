import { Product } from '../products/product/product.model';

export class Order {
    id: number;
    amount: number;
    isOrdered: boolean;
    orderDate: Date;
    userId: number;
    productId: number;
    product: Product;
    sum: number;
    constructor(order?) {
        this.id = order ? order.id : 0;
        this.amount = order ? order.amount : null;
        this.userId = order ? order.userId : null;
        this.productId = order ? order.productId : null;
        this.orderDate = order ? order.orderDate : null;
        this.product = order ? order.product : null;
        this.sum = order ? order.sum : null;
    }
}
