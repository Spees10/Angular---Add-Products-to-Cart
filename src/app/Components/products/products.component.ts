import { CartService } from './../../Services/cart.service';
import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList: any;

  constructor(private api: APIService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(res => {
      this.productList = res;

      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    })
  }

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }

}
