import { Component, HostListener, ElementRef } from '@angular/core';
import { products } from 'src/app/data/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product = products

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
  }
  constructor(private router: Router,) { }

  ngOnInit() { }

  viewDetail(productId: string | number) {
    // Điều hướng đến trang chi tiết sản phẩm với productId
    this.router.navigate(['/product', productId]);
  }
  VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

}
