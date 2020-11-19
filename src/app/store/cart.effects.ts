import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { CartActionTypes, LoadCartSuccess } from './cart.actions';
import { CartService } from '../_services/cart.service';

@Injectable()
export class CartEffects {
    constructor(
        private actions$: Actions,
        private cartService: CartService
    ) { }

    @Effect()
    loadCart$ = this.actions$.pipe(
        ofType(CartActionTypes.LoadCart),
        map(() => {
            let cart = this.cartService.getCart();
            return new LoadCartSuccess(cart);
        })
    );

    // @Effect()
    // addToCart$ = this.actions$.pipe(
    //     ofType(CartActionTypes.Add),
    //     map(() => {
    //         // this.cartService.updateCart(new Cart());
    //     })
    // );

    // @Effect()
    // removeFromCart$ = this.actions$.pipe(
    //     ofType(CartActionTypes.Remove),
    //     map(() => {
    //         // this.cartService.updateCart(new Cart());
    //     })
    // );
}