import { Component, Input, OnInit } from '@angular/core';
import { Cart, CartItem } from '../model/cart';
import { Product } from '../model/product';
import { Products } from '../model/products';
import { SmartComponent } from '../smart-component';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends SmartComponent {

  @Input()
  public categoryId: string;

  public products: Array<Product> = new Array<Product>();

  constructor(private productService: ProductService,
    private cartService: Cart) {
    super();
  }

  ngOnInit(): void {
    this.productService
      .getProducts(this.categoryId)
      .subscribe((data: Product[]) => this.products = data);
  }

  addToCart(cartItem: CartItem) {
    this.cartService.addItem(cartItem);
  }

}
