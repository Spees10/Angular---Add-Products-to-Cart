import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<any>("https://fakestoreapi.com/products").pipe(map((res: any) => {
      return res;
    }));
  }
}
