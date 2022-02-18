import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Electric Kettle','The Electric Kettle',25,1),
    new Product(2, 'Wireless Mouse','The mouse ',25,1),
    new Product(3, 'Steam Iron','The steam iron',25,1),
    new Product(4, 'Keyboard','The keyboard',25,1)
  ]
  constructor() { }

  getProducts(){
    return this.products;
  }

  getProduct(id:number){
    return this.products.find(product => product.id === id);
  }
}
