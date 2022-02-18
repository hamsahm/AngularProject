import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] =[]
constructor(private productsService: ProductService){
}

  ngOnInit(): void {
    this.products = this.productsService.getProducts()
  }

}
