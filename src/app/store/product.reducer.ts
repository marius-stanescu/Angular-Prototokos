import { Product } from '../model/product';
import { ProductActions, ProductActionTypes } from './product.actions';

export const initialState: Array<Product> = new Array<Product>();

export function ProductReducer(state = initialState, action: ProductActions) {
    switch (action.type) {
        case ProductActionTypes.LoadProductsSuccess:
            return Object.assign(new Array<Product>(), action.products);

        default:
            return state;
    }
}