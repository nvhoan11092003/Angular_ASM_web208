import { Component } from '@angular/core';
import { ICategories } from 'src/app/common/categories';
import { ProductService } from 'src/app/services.service';

@Component({
  selector: 'app-list-brands',
  templateUrl: './list-brands.component.html',
  styleUrls: ['./list-brands.component.css']
})
export class ListBrandsComponent {
  categories: ICategories[] = [];
  constructor(private productService: ProductService) {
    this.productService.getCates().subscribe(data => {
      this.categories = data?.categorys;
      console.log({ data });
    })
  }

  OnhandleDelete(id: string | number | undefined) {
    const confilm = window.confirm("Bạn có muốn xóa không ?");
    if (confilm) {
      this.productService.deleteCategory(id).subscribe(() => {
        this.categories.filter(item => item._id !== id)
        alert("xóa thành công")
      })
    }
  }
}
