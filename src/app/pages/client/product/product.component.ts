import { Component, HostListener, ElementRef } from '@angular/core';
// import axios from 'axios';
import { Router } from '@angular/router';
import { IProduct } from "src/app/common/product";
import { ProductService } from 'src/app/services.service';
import { CategoriesService } from 'src/app/categories.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: any[] = []

  list: any[] = [];

  categories: any = [];
  limit: number = 4;
  increaseLimit() {
    this.limit += 4;
  }
  selectedValue: string = '';

  onSelectChange() {

    if (this.selectedValue == "tang") {

      this.products = this.products.sort((a, b) => a.price - b.price)

    }
    else if (this.selectedValue == "giam") {
      this.products = this.products.sort((a, b) => b.price - a.price)
    }
    else {
      this.products = [...this.list]

    }

  }



  constructor(private productService: ProductService, private categoriesService: CategoriesService, private fb: FormBuilder) {
    this.productService.getProducts().subscribe(data => {
      this.products = data.products
      this.list = [...this.products]

    })
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data.categorys
    })

    this.onSelectChange
  }

  isShow: boolean = false;
  topPosToStartShowing = 100;
  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // console.log('[scroll]', scrollPosition);

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








}
