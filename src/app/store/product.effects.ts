import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Product, ProductExtra, ProductExtraCategory } from '../model/product';
import { ProductService } from '../_services/product.service';
import { LoadProducts, LoadProductsSuccess, ProductActionTypes } from './product.actions';

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) { }

    @Effect()
    loadProducts$ = this.actions$.pipe(
        ofType(ProductActionTypes.LoadProducts),
        mergeMap((action: LoadProducts) =>
            this.productService.getProducts(action.categoryId).pipe(
                map(data => {
                    let products = data.map(p => {
                        let product = new Product(p.id, p.title, p.price,
                            p.category, p.description, p.image);
                        if (product.categoryId.includes('clothing')) {
                            product.extras = [
                                new ProductExtraCategory('Size', true, true, [
                                    new ProductExtra('Small', 0),
                                    new ProductExtra('Medium', product.price * 5 / 100),
                                    new ProductExtra('Large', product.price * 10 / 100),
                                ]),
                                new ProductExtraCategory('Color', true, true, [
                                    new ProductExtra('Red', 0),
                                    new ProductExtra('Green', 0),
                                    new ProductExtra('Blue', 0),
                                    new ProductExtra('Rainbow', 10),
                                ]),
                            ];
                        } else if (action.categoryId.includes('jewelery')) {
                            product.extras = [
                                new ProductExtraCategory('Gift wrapping', false, false, [
                                    new ProductExtra('Wrapping paper', 2),
                                    new ProductExtra('Gift box', 10),
                                    new ProductExtra('Gift bag', 5),
                                ]),
                            ];
                        }
                        return product;
                    });
                    return new LoadProductsSuccess(products);
                }),
                catchError(() => EMPTY)
            )
        )
    );
}