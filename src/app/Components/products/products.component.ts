import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList: any;

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(res => {
      this.productList = res;
    })
  }

}
