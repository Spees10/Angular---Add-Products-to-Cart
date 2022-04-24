import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { ProductsComponent } from './Components/products/products.component';

const routes: Routes = [
  { path: '', redirectTo: 'Products', pathMatch: 'full' },
  { path: 'Products', component: ProductsComponent },
  { path: 'Cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
