import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './common/product';
// import { IProduct } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})


export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<IProduct[]>('http://localhost:8080/api/products');
  }
  getProduct(id: any): Observable<IProduct> {
    return this.http.get<IProduct>('http://localhost:3000/products/' + id);
  }
  deleteProduct(id: number | string | undefined): Observable<IProduct> {
    return this.http.delete<IProduct>('http://localhost:8080/api/products/' + id);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('http://localhost:3000/products/', product);
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`http://localhost:8080/api/products/${product._id}`, product);
  }
}