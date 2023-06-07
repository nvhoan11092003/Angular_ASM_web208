import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ICategories } from 'src/app/common/categories';
import { IProduct } from 'src/app/common/product';
import { ProductService } from 'src/app/services.service';
import { UploadServiceService } from 'src/app/upload-service.service';
// import { } from '@cloudinary/angular';


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
    private http: HttpClient,
    private uploadService: UploadServiceService
  ) {
    this.productService.getCates().subscribe(data => {
      this.category = data?.categorys
    })
  }
  HandleGetfile(file: any) {
    console.log(file.target.files[0]);
    const fileArr = file.target.files[0];

    this.uploadService.uploadFile(fileArr).subscribe(data => {
      console.log(data.url);
      this.productForm.patchValue({
        image: data.url
      })
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
        image: this.productForm.value.image || "",
        categoryId: this.productForm.value.categoryId || '',
        salient_features: this.productForm.value.salient_features || '',
      }
      this.productService.addProduct(product).subscribe(data => {
        console.log("products :", data)
        alert("Thêm sản phẩm thành công");
        this.router.navigate(['/admin'])
      })
    }
  }
}
