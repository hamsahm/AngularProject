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

    console.log(" this.products inside cart component "+this.products)
    if(this.products.length === 0){
      this.hidden = true
    }

    for (var product of this.products) {
      this.totalPrice = this.totalPrice + (product.qtyOrdered * product.price);
    }

    console.log(this.totalPrice);

  }

  placeOrder(): void{
      alert(" The order placed successfully");
  }
}
