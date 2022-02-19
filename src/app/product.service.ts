import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 

  products: Product[] = [
    new Product(1, 'Apple',200,10, 0,""),
    new Product(2, 'Guava',25,10, 0,""),
    new Product(3, 'Sweet Lime',50,10, 0,""),
    new Product(4, 'Pineapple',50,10, 0,""),
    new Product(5, 'Pomegranate',200,10, 0,""),
    new Product(6, 'Potato',30,10, 0 ,""),
    new Product(7, 'Carrot',40,10, 0, ""),
    new Product(8, 'Brocolli',50,10, 0,""),
    new Product(9, 'Sweet Corn',30,10, 0,""),
    new Product(10, 'Beetroot',40,10, 0,"")
  ]

  cartItems: Product[] = []
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

  searchProductByName(productName:String): Product {

    console.log("inside service for search"+productName)
    let searchedProduct: Product = new Product(0,"",0,0, 0,"")
    this.products.find(product => {
     if( product.name === productName){
      searchedProduct = product;
     } 
    });

     return searchedProduct;
  
}

setCartItems(cartItems: Product[]){
    this.cartItems = cartItems;
}

getCartItems(): Product[] {
  return this.cartItems
  }
}