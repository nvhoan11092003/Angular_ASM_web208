import { Component } from '@angular/core';
import { IProduct } from 'src/app/common/product';
import { ProductService } from 'src/app/services.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data?.products
    })
  }
  handleDelete(id: string | number | undefined) {
    const confilm = window.confirm("Bạn có muốn xóa không ?");
    if (confilm) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products.filter(item => item._id !== id)
        alert("xóa thành công")
      })
    }
  }
}
