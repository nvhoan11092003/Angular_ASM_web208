import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, flatMap } from 'rxjs';
import { IUsersignup, IUsersignin, IUserdata } from './common/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) {
  }

  signup(User: IUsersignup): Observable<IUserdata> {
    return this.http.post<IUserdata>('http://localhost:8080/api/signup/', User);
  }
  // login(User: IUsersignin): Observable<IUserdata> {
  //   return this.http.post<IUserdata>('http://localhost:8080/api/signin/', User);
  // }
  signin(email: string | "", password: string) : boolean | any {
    const userform = {
      email: email || "",
      password: password || "",
    }
    this.http.post<IUserdata>('http://localhost:8080/api/signin/', userform)
      .subscribe(data => {         
       
          const user = data.user
          localStorage.setItem('user', JSON.stringify(user))
          console.log(localStorage.getItem('user'));
          if (JSON.parse(localStorage.getItem('user') || '').role === "admin") {
            this.router.navigate(['/', 'admin'],).then(() => location.reload())
          }
          else this.router.navigate(['/', 'home'],).then(() => location.reload())  
        
        })
   
  }

}
