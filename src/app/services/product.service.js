"use strict";
var Product = (function () {
    function Product(id, title, price, rating, description, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.description = description;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        return products.map(function (p) { return new Product(p.id, p.title, p.price, p.rating, p.description, p.categories); });
    };
    return ProductService;
}());
exports.ProductService = ProductService;
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
