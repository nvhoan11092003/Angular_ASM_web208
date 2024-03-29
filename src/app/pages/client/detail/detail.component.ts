import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import axios from 'axios';
import { IProduct } from 'src/app/common/product';
import { ProductService } from 'src/app/services.service';
// import { Product } from 'src/app/common/product';

// import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  product!: any;
  productForm = this.formBuilder.group({
    name: [''],
    price: 0
  })
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.productService.getProduct(id).subscribe(product => {
        console.log(product);

        this.product = product;
      })
    });
  }
  VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

}

