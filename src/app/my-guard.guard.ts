import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyGuardGuard {

  constructor(private router: Router) {


  }

  // kiểm tra xem người dùng đã đăng nhập voi quyen aidmin hay chua hay chưa


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user') || "")
      const role = user.role


      if (role === 'admin') {

        return true; // cho phép truy cập
      } else {
        this.router.navigate(['/home']); // chuyển hướng đến trang đăng nhập
        return false; // không cho phép truy cập     
      }
    }
    else {

      this.router.navigate(['/home']); // chuyển hướng đến trang đăng nhập

      return true;

    }
  }


}
