import { Component } from '@angular/core';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent {

  user: any;
  constructor() {
    this.user = JSON.parse(localStorage.getItem("user") || '')
  }
  dangxuat() {
    localStorage.removeItem('user')
    location.reload()
  }

}
