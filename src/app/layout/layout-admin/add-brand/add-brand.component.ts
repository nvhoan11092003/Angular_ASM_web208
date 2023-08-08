import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms"
import { ICategories } from 'src/app/common/categories';
import { ProductService } from 'src/app/services.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent {
  validate: boolean = false;

  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  cateForm = this.formBuilder.group({
    name: ['', [Validators.required]]
  })
  onHandleSubmit() {
    this.validate = true;
    if (this.cateForm.valid) {
      const categorys: ICategories = {
        name: this.cateForm.value.name || "",
      }
      this.productService.addCategory(categorys).subscribe(data => {
        alert("Thêm sản phẩm thành công");
        this.router.navigate(['/admin/brands'])
      })
    }
  }
}
