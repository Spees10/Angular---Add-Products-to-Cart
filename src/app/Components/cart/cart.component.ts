import { CartService } from './../../Services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: any = [];
  grandTotal!: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTOtalPrice();
    });
  }

  removePrd(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptyCart() {
    this.cartService.removeAllCart();
  }

}
