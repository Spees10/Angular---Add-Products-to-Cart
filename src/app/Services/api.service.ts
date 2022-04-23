import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<any>(`${environment.apiBaseUrl}/products`).pipe(map((res: any) => {
      return res;
    }));
  }
}
