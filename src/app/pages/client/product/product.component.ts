import { Component, HostListener, ElementRef } from '@angular/core';
// import axios from 'axios';
import { Router } from '@angular/router';
import { IProduct } from "src/app/common/product";
import { ProductService } from 'src/app/services.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  status: boolean = false;
  productName = "";
  products: IProduct[] = []

  // product!: IProduct;

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data.products

    })
    // console.log(this.products)
  }

  isShow: boolean = false;
  topPosToStartShowing = 100;
  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    // console.log(this.products);

  }
  VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
  // constructor(private router: Router) { }

  // ngOnInit() { }

  // viewDetail(productId: string | number) {
  //   // Điều hướng đến trang chi tiết sản phẩm với productId
  //   this.router.navigate(['/product', productId]);
  // }
  // VND = new Intl.NumberFormat('vi-VN', {
  //   style: 'currency',
  //   currency: 'VND',
  // }
  // );







}
