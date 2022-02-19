import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Product[]= [];
  numOfItems = new BehaviorSubject([]);
  constructor() { }

  addItem(product: Product){

    const exist = this.cartItems.find((item)=>{
      return item.id === product.id;
    });

    if(exist){
      exist.qty;
    } else {
      this.cartItems.push(product);
    }

  }
}
