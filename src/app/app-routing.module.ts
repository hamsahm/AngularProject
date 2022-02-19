import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { SearchFormComponent } from './search-form/search-form.component';

const routes: Routes = [
{ path: '', component: ProductsComponent},
{ path: 'products', component: ProductsComponent },
{ path: 'products/:id', component: ProductComponent },
{ path: 'admin', component:AdminComponent },
{ path: 'search', component: SearchFormComponent},
{ path: 'cart', component: CartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
