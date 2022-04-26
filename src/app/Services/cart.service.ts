import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemList: any = [];
  private prodList = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts() {
    return this.prodList.asObservable();
  }

  setProduct(prod: any) {
    this.cartItemList.push(...prod);
    this.prodList.next(prod);
  }

  addToCart(prod: any) {
    this.cartItemList.push(prod);
    this.prodList.next(this.cartItemList);
    this.getTOtalPrice();
  }

  getTOtalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(prod: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (prod.id === a.id) this.cartItemList.splice(index, 1);
    })
    this.prodList.next(this.cartItemList);
  }

  removeAllCart() {
    this.cartItemList = []
    this.prodList.next(this.cartItemList);
  }
}
