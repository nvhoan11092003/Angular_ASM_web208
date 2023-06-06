import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from './common/product';
import { IUser } from './common/users';
import { ICategories } from './common/categories';
// import { IProduct } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})


export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<IProduct[]>('http://localhost:8080/api/products');
  }
  getProduct(id: any): Observable<any> {
    return this.http.get<IProduct>('http://localhost:8080/api/products/' + id);
  }
  deleteProduct(id: number | string | undefined): Observable<IProduct> {
    return this.http.delete<IProduct>('http://localhost:8080/api/products/' + id);
  }
  addProduct(product: IProduct): Observable<any> {
    return this.http.post<IProduct>('http://localhost:8080/api/products/', product);
  }
  updateProduct(product: IProduct): Observable<any> {
    return this.http.put<IProduct>(`http://localhost:8080/api/products/${product._id}`, product);
  }

  //account

  getUsers(): Observable<any> {
    return this.http.get<IUser[]>('http://localhost:8080/api/users/')
  }
  deleteUser(id: number | string | undefined): Observable<IUser> {
    return this.http.delete<IUser>(`http://localhost:8080/api/users/` + id)
  }
  //category

  getCates(): Observable<any> {
    return this.http.get<ICategories[]>('http://localhost:8080/api/categorys');
  }
  getCate(id: any): Observable<any> {
    return this.http.get<ICategories>('http://localhost:8080/api/categorys/' + id);
  }
  deleteCategory(id: number | string | undefined): Observable<any> {
    return this.http.delete<ICategories>('http://localhost:8080/api/categorys/' + id);
  }
  addCategory(cate: ICategories): Observable<any> {
    return this.http.post<ICategories>('http://localhost:8080/api/categorys', cate);
  }
  updateCategpry(cate: ICategories): Observable<any> {
    return this.http.put<ICategories>(`http://localhost:8080/api/categorys/${cate._id}`, cate);
  }
}