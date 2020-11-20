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

  public categories: Array<Category> = this.productService.getCategories();

  constructor(private productService: ProductService) {
    super();
  }
}
