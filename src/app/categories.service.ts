import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }


  getCategories(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/categories');
  }
  getCategorie(id: any): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/categories/' + id);
  }
  deleteCategories(id: number | string): Observable<any> {
    return this.http.delete<any>('http://localhost:8080/api/categories/' + id);
  }
  addCategories(product: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/categories/', product);
  }
}
