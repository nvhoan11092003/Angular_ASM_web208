import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/data/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const productId = Number(params.get('id'));
      this.product = products.find((product) => product.id === productId);
    });
  }
  VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
}

