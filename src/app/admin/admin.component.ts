import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  products: Product[] =[]
 product?: Product;
 // newProduct?: Product;
  productName: string = "";
 price:number = 0;
qty:number = 0;
id:number = 0;
addProductForm: FormGroup = new FormGroup({
  productName: new FormControl(),
  price: new FormControl(),
  qty: new FormControl()
});


  constructor(private productsService: ProductService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts()
  }



    //addProduct(productName:string, price:number, qty:number){
          addProduct(){

            console.log(this.addProductForm.value);
            this.productName = this.addProductForm.value.productName
            this.price = this.addProductForm.value.price
            this.qty = this.addProductForm.value.qty
          console.log(" add product clicked");
          console.log(this.productName);
          console.log(this.price);
          console.log(this.qty);
          let newProduct:Product = new Product(0,this.addProductForm.value.productName,this.addProductForm.value.price,this.addProductForm.value.qty,0,"")

          this.productsService.addProduct(newProduct);
        }

  deleteProduct(product:Product){

    console.log(product);
    this.productsService.deleteProduct(product);
  }
  
}

