import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../model/categories';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Category[] {
    return Categories;
  }

  getProducts(categoryId: string) : Observable<any> {
    return this.httpClient.get('https://fakestoreapi.com/products/category/' + categoryId);
  }
}
