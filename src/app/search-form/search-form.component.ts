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

  addToCart(product: Product){
    console.log(product);

  }

}
