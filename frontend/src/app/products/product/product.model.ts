
export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    categoryId: number;
    picture: string;

    constructor(product?) {
        this.id = product ? product.id : 0;
        this.name = product ? product.name : null;
        this.description = product ? product.description : null;
        this.price = product ? product.price : 0;
        this.category = product ? product.category : null;
        this.categoryId = product ? product.categoryId : null;
        this.picture = product ? product.picture : null;
    }
}

