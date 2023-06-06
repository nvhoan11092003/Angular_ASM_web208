import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategories } from 'src/app/common/categories';
import { IProduct } from 'src/app/common/product';
import { ProductService } from 'src/app/services.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  category: ICategories[] = [];

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.productService.getCates().subscribe(data => {
      this.category = data?.categorys
    })
  }

  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
    original_price: [0],
    description: [''],
    categoryId: [''],
    salient_features: [''],
    image: [''],
  })
  onHandleSubmit() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
        original_price: this.productForm.value.original_price || 0,
        description: this.productForm.value.description || '',
        categoryId: this.productForm.value.categoryId || '',
        salient_features: this.productForm.value.salient_features || '',
      }
      this.productService.addProduct(product).subscribe(data => {
        console.log(data);

        // alert("Thêm sản phẩm thành công");
        // this.router.navigate(['/admin/brands'])
      })
    }
  }
}
