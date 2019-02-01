export class Category {
    id: number;
    name: string;
    description: string;
    constructor(category?) {
        this.id = category ? category.id : 0;
        this.name = category ? category.name : null;
        this.description = category ? category.description : null;

    }
}
