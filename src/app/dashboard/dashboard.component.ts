import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import { SmartComponent } from '../smart-component';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends SmartComponent {

  constructor(private productService: ProductService) {
    super();
  }

  get categories(): Category[] {
    return this.productService.getCategories();
  }
}
