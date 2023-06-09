import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  itemList: any = []
  filterValue: string = '';
  display: boolean = false;
  user: any;

  constructor(public data: ProductService) {

    this.data.getProducts().subscribe((item) => {
      this.itemList = item.products;

    })
    if (localStorage.getItem("user")) {
      this.user = JSON.parse(localStorage.getItem("user") || "");
    }
    this.checkUser();
  }
  check: number = 0;
  filteredItemList = this.itemList;
  listID = []
  filterList() {
    if (this.filterValue == '') {
      this.display = false;
    }
    else {
      this.display = true;

      this.filteredItemList = this.itemList.filter((item: any) => item.name.toLowerCase().indexOf(this.filterValue.toLowerCase()) !== -1)
      console.log(this.filteredItemList, this.filterValue);
    }

  }
  hide() {
    this.display = false;

  }
  show() {
    if (this.filterValue !== "") {
      this.display = true;

    }
  }
  checkUser() {
    if (this.user) {

      return true;

    }
    else return false;
  }
  dangxuat() {
    localStorage.removeItem('user')
    location.reload()
  }
}

