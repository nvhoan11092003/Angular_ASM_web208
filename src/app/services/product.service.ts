import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { IProduct } from '../models/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>("http://localhost:8080/api/products");
  }
  getProduct(id: number | string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>("http://localhost:8080/api/products" + id);
  }
}
