import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Apple',200,10,""),
    new Product(2, 'Potato',25,10,""),
    new Product(3, 'Brocolli',100,10,""),
    new Product(4, 'Pomegranate',200,10,"")
  ]
  constructor() { }

  getProducts(){
    return this.products;
  }

  getProduct(id:number){
    return this.products.find(product => product.id === id);
  }

  deleteProduct(product:Product){
    
    this.products.forEach((element,index)=>{
      if(element==product) delete this.products[index];
   });
    return this.products;
  }

  addProduct(product: Product){
    let counter = this.products.length
    console.log("Inside service method "+product)
    product.id = counter+1
    return this.products.push(product);
  }
}
