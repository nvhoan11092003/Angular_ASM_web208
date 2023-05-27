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
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: [''],
    price: 0
  })
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {



  }


  // product: any;

  // data = axios.get("http://localhost:8000/api/products/")
  //   .then((res) => {
  //     this.product = res.data

  //   })
  //   .catch((error) => console.log(error));
  // constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.productService.getProduct(id).subscribe(product => {
        this.product = product;
      })
    });
  }
  VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

}

