import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[] = []
  hidden: Boolean = false;
  totalPrice: number = 0;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.products = this.productService.getCartItems();

    if(this.products.length === 0){
      this.hidden = true
    }

    for (var product of this.products) {
      this.totalPrice = this.totalPrice + (product.qtyOrdered * product.price);
    }
  }

  placeOrder(): void{
      alert(" The order placed successfully");
  }
}
