import { Cart } from '../model/cart';
import { CartActions, CartActionTypes } from './cart.actions';

export const initialState = new Cart();

export function CartReducer(state = initialState, action: CartActions) {
    switch (action.type) {
        case CartActionTypes.LoadCartSuccess:
            return action.payload;

        case CartActionTypes.Add:
            return new Cart([...state.items, action.payload]);

        case CartActionTypes.Remove:
            return new Cart([...state.items.filter(item => item.product.id !== action.payload.product.id)]);

        default:
            return state;
    }
}