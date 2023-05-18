import { Component } from '@angular/core';
import { products } from 'src/app/data/products';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product = products
}
