import { Component, HostListener, ElementRef } from '@angular/core';
import axios from 'axios';
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

  products: any = []


  categories: any = [];

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


  constructor(private productService: ProductService, private categoriesService: CategoriesService, private fb: FormBuilder) {
    this.productService.getProducts().subscribe(data => {
      this.products = data.products
      console.log(this.products.length);



    })
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data.categorys



    })

  }

  isShow: boolean = false;
  topPosToStartShowing = 100;
  @HostListener('window:scroll')
  checkScroll() {

    // window의 scroll top
    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.

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
