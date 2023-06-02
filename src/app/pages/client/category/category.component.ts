import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  cate = document.querySelectorAll('.cate')
  all: any;

  check() {


    if (this.all) {
      console.log("hello");

    }

  }


  categories: any = []


  constructor(private categoriesService: CategoriesService) {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data.categorys


    })
  }
}
