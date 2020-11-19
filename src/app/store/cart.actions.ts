import { Action } from '@ngrx/store';
import { Cart, CartItem } from '../model/cart';


export enum CartActionTypes {
    Add = '[Cart] Add to cart',
    Remove = '[Cart] Remove from cart',
    LoadCart = '[Cart] Load cart',
    LoadCartSuccess = '[Cart] Cart loaded',
}

export class AddToCart implements Action {
    readonly type = CartActionTypes.Add;

    constructor(public payload: CartItem) { }
}

export class RemoveFromCart implements Action {
    readonly type = CartActionTypes.Remove;

    constructor(public payload: CartItem) { }
}

export class LoadCart implements Action {
    readonly type = CartActionTypes.LoadCart;
}

export class LoadCartSuccess implements Action {
    readonly type = CartActionTypes.LoadCartSuccess;

    constructor(public payload: Cart) { }
}

export type CartActions = AddToCart | RemoveFromCart | LoadCart | LoadCartSuccess;