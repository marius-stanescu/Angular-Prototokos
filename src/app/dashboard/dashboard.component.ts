import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { Categories } from '../model/categories';
import { Products } from '../model/products';
import { SmartComponent } from '../smart-component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends SmartComponent {

  constructor() {
    super();
  }

  get categories(): Category[] {
    return Categories;
  }

  getProducts(categoryId: number) {
    return Products.filter(p => p.categoryId == categoryId);
  }
}
