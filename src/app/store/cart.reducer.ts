import { Cart, CartItem } from '../model/cart';
import { CartActions, CartActionTypes } from './cart.actions';

export const initialState = new Cart();

export function CartReducer(state = initialState, action: CartActions) {
    switch (action.type) {
        case CartActionTypes.LoadCartSuccess:
            return action.cart;

        case CartActionTypes.Add: {
            let currentItems = state.items;
            let existingItem = currentItems.find(item => item.product.id === action.cartItem.product.id);

            if (existingItem) {
                let otherItems = currentItems.filter(item => item.product.id !== action.cartItem.product.id);
                let quantity = action.cartItem.quantity + existingItem.quantity;
                return new Cart([...otherItems, new CartItem(existingItem.product, quantity)])
            }

            return new Cart([...state.items, action.cartItem]);
        }

        case CartActionTypes.Remove:
            return new Cart([...state.items.filter(item => item.product.id !== action.cartItem.product.id)]);

        default:
            return state;
    }
}