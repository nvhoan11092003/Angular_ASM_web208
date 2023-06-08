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
  currentPage = 1;
  pageSize = 3;

  get pagedItemList() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.products.slice(startIndex, endIndex);
  }

  get totalPages() {
    return Math.ceil(this.products.length / this.pageSize);
  }

  prevPage() {
    this.currentPage--;
  }

  nextPage() {
    this.currentPage++;
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
