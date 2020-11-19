import { Action } from '@ngrx/store';
import { CartItem } from '../model/cart';


export enum CartActionTypes {
    Add = '[Cart] Add to cart',
    Remove = '[Cart] Remove from cart',
}

export class AddToCart implements Action {
    readonly type = CartActionTypes.Add;

    constructor(public payload: CartItem) { }
}

export class RemoveFromCart implements Action {
    readonly type = CartActionTypes.Remove;

    constructor(public payload: CartItem) { }
}

export type CartActions = AddToCart | RemoveFromCart;