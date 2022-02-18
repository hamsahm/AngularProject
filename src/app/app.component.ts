import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingCart';
itemInCart:number =0;
  constructor(private cartService: CartService){
    
  }

  ngOnInit(){
    this.cartService.numOfItems.subscribe( d => {

      this.itemInCart = d.length;
      console.log(d);
    })
  }
}
