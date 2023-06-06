import { Component } from '@angular/core';
import { IUser } from 'src/app/common/users';
import { ProductService } from 'src/app/services.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  users: IUser[] = [];
  constructor(
    private productService: ProductService
  ) {
    this.productService.getUsers().subscribe(data => {
      this.users = data.users
    })
  }
  handleDelete(id: string | number | undefined) {
    const confilm = window.confirm("Bạn có muốn xóa không")
    if (confilm) {
      this.productService.deleteUser(id).subscribe(() => {
        this.users.filter(item => item._id !== id)
        alert("Xóa thành công")
      })
    }
  }
}
