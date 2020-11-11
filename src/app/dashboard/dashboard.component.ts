import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { Categories } from '../model/categories';
import { Products } from '../model/products';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get categories(): Category[] {
    return Categories;
  }

  getProducts(categoryId: number) {
    return Products.filter(p => p.categoryId == categoryId);
  }
}
