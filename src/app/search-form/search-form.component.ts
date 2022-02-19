import { createDirectiveTypeParams } from '@angular/compiler/src/render3/view/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  products: Product[] =[]
  product?:Product;
  productName: String = ""
  hidden: Boolean = false;
  cartItems: Product[] = [];

  searchProductForm: FormGroup = new FormGroup({
    productName: new FormControl(),
  });
  
  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts()
  }

  searchProduct(){

    console.log(this.searchProductForm.value);
    this.productName = this.searchProductForm.value.productName

    this.product = this.productsService.searchProductByName(this.productName)

    this.products = [];
    if(this.product.id != 0){
      this.products.push(this.product);
    }
    
    if(this.products.length === 0) {
      alert(" Item is not present in the list. Please check other items");
      this.hidden = true;
    }
  }

  addToCart(addedProduct: Product){
      this.products.forEach( prod => {
        if(prod === addedProduct){
          prod.qty = prod.qty - 1;
          if(prod.qtyOrdered > 0){
            prod.qtyOrdered = prod.qtyOrdered + 1
          } else {
            prod.qtyOrdered = 1;
          }
          let prod1 = new Product(prod.id, prod.name, prod.price, prod.qty, prod.qtyOrdered ,prod.imgUrl)
          this.cartItems.push(prod1)
        }
      });

  this.productsService.setCartItems(this.cartItems);

}

}