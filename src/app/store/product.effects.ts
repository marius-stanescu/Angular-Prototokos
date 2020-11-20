import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
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
                map(products => {
                    return new LoadProductsSuccess(products);
                }),
                catchError(() => EMPTY)
            )
        )
    );
}