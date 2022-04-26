import { CartService } from './../../Services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  totalItems: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.totalItems = res.length;
    })
  }

}
