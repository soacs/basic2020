
import { Component} from '@angular/core';
import {Product, ProductService} from '../../services/product.service';

@Component({
    selector: 'productlist',
    templateUrl: './productlist.html',
    styleUrls: ['./productlist.css'],
})
export default class ProductlistComponent {
    products: Array<Product> = [];
    content: string;

    constructor(productService: ProductService) {
        this.products = productService.getProducts();
        this.content = 'ProductListComponent';
    }
}
