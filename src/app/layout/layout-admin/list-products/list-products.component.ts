import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/common/product';
import { ProductService } from 'src/app/services.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products: IProduct[] = [];
  pageSize = 3;
  currentPage = 1;
  startIndex = 0;
  endIndex = this.pageSize;
  pages: number[] = [];
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data?.products
      this.calculatePages();
    })
  }

  calculatePages() {
    const pageCount = Math.ceil(this.products.length / this.pageSize);
    this.pages = [];
    for (let i = 1; i <= pageCount; i++) {
      this.pages.push(i);
      // console.log(this.pages);

    }
  }
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    // console.log(this.products);

  }
  goToPage(page: number) {
    this.currentPage = page;
    this.startIndex = (this.currentPage - 1) * this.pageSize;
    this.endIndex = this.startIndex + this.pageSize;
    if (this.currentPage == page) {
      // console.log(this.a);

    }
  }

  nextPage() {
    if (this.currentPage < this.pages.length) {
      this.currentPage++;
      this.startIndex = (this.currentPage - 1) * this.pageSize;
      this.endIndex = this.startIndex + this.pageSize;
    }

  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.startIndex = (this.currentPage - 1) * this.pageSize;
      this.endIndex = this.startIndex + this.pageSize;
    }
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
