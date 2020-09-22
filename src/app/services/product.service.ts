export class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public description: string,
        public categories: Array<string>) {
    }
}

export class ProductService {
    getProducts(): Array<Product> {
        return products.map(p => new Product(p.id, p.title, p.price, p.rating, p.description, p.categories));
    }
}

var products = [
    {
        "id": 0,
        "title": "Product One: Toaster",
        "price": 20.49,
        "rating": 4.1,
        "description": "This is a short description: This toaster is a 4 slice electric toaster.",
        "categories": ["electronics", "hardware"]
    },
    {
        "id": 1,
        "title": "Produt two: Text book on Angular",
        "price": 44.99,
        "rating": 2.5,
        "description": "This is a short description: This is a text book that has Angular 4 Tutorials.",
        "categories": ["books"]
    },
    {
        "id": 2,
        "title": "Product Three: Ipad Pro from Apple Computer",
        "price": 374.99,
        "rating": 4.0,
        "description": "This is a short description: The iPad Pro has many features that ar very useful.",
        "categories": ["electronics"]
    }
];

