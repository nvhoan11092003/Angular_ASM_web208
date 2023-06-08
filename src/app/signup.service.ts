import { IUser, IUsersignin } from './common/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:8080/api/users');
  }
  signup(User: IUser): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:8080/api/signup/', User);
  }
  signin(User: IUsersignin): Observable<IUsersignin> {
    return this.http.post<IUser>('http://localhost:8080/api/signin/', User);
  }

  finduserbyid(id : string): Observable<IUsersignin> {
    return this.http.post<IUser>('http://localhost:8080/api/signin/', + id);
  }

}

