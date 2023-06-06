import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategories } from 'src/app/common/categories';
import { IProduct } from 'src/app/common/product';
import { ProductService } from 'src/app/services.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent {
  product!: IProduct;
  categorys: ICategories[] = [];
  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
    original_price: [0],
    description: [''],
    categoryId: [''],
    salient_features: [''],
    image: [''],
  }
  )


  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.productService.getProduct(id).subscribe(product => {
        this.product = product.products;
        // console.log(product);

        this.productForm.patchValue({
          name: this.product.name,
          price: this.product.price,
          original_price: this.product.original_price,
          description: this.product.description,
          categoryId: this.product.categoryId,
          salient_features: this.product.salient_features,
        })
      })
    }),
      this.productService.getCates().subscribe(data => {
        this.categorys = data?.categorys
      })
  }
  onHandleEdit() {
    if (this.productForm.valid && this.product) {
      const product: IProduct = {
        _id: this.product._id,
        name: this.productForm.controls['name'].value || "",
        price: this.productForm.value.price || 0,
        original_price: this.productForm.value.original_price || 0,
        description: this.productForm.value.description || '',
        categoryId: this.productForm.value.categoryId || '',
        salient_features: this.productForm.value.salient_features || '',
      }
      this.productService.updateProduct(product).subscribe(data => {
        alert("Cập nhật thành công");
        this.router.navigate(['/admin'])
      })
    }
  }
}
