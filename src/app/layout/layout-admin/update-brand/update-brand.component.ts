import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategories } from 'src/app/common/categories';
import { ProductService } from 'src/app/services.service';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})
export class UpdateBrandComponent {
  categorys!: ICategories;
  cateForm = this.formBuilder.group({
    name: ['', Validators.required],
  })
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.route.paramMap.subscribe(param => {
      const id = param.get('id');
      this.productService.getCate(id).subscribe(categorys => {
        this.categorys = categorys;
        this.cateForm.patchValue({
          name: categorys.name,
        })
      })
    })

  }
  onHandleEdit() {
    if (this.cateForm.valid && this.categorys) {
      const category: ICategories = {
        _id: this.categorys._id,
        name: this.cateForm.value.name || "",
      }
      this.productService.updateCategpry(category).subscribe(data => {
        alert("Cập nhật thành công");
        this.router.navigate(['/admin/brands'])
      })
    }
  }
}