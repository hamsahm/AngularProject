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
  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.products = this.productService.getCartItems();

    if(this.products.length === 0){
      this.hidden = true
    }

  }

  placeOrder(): void{
      alert(" The order placed successfully");
  }
}
