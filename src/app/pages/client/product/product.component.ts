import { Component } from '@angular/core';
import { products } from 'src/app/data/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product = products;

  constructor(private router: Router) { }

  ngOnInit() { }

  viewDetail(productId: string | number) {
    // Điều hướng đến trang chi tiết sản phẩm với productId
    this.router.navigate(['/product', productId]);
  }

}
