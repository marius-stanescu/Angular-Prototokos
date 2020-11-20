import { Action } from '@ngrx/store';
import { Cart, CartItem } from '../model/cart';


export enum CartActionTypes {
    Add = '[Cart] Add to cart',
    Added = '[Cart] Added to cart',
    Remove = '[Cart] Remove from cart',
    Removed = '[Cart] Removed from cart',
    LoadCart = '[Cart] Load cart',
    LoadCartSuccess = '[Cart] Cart loaded',
}

export class AddToCart implements Action {
    readonly type = CartActionTypes.Add;

    constructor(public cartItem: CartItem) { }
}

export class AddedToCart implements Action {
    readonly type = CartActionTypes.Added;

    constructor(public cartItem: CartItem) { }
}

export class RemoveFromCart implements Action {
    readonly type = CartActionTypes.Remove;

    constructor(public cartItem: CartItem) { }
}

export class RemovedFromCart implements Action {
    readonly type = CartActionTypes.Removed;

    constructor(public cartItem: CartItem) { }
}

export class LoadCart implements Action {
    readonly type = CartActionTypes.LoadCart;
}

export class LoadCartSuccess implements Action {
    readonly type = CartActionTypes.LoadCartSuccess;

    constructor(public cart: Cart) { }
}

export type CartActions = AddToCart | RemoveFromCart | LoadCart | LoadCartSuccess;