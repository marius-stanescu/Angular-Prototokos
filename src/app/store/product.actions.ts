import { Action } from '@ngrx/store';
import { Product } from '../model/product';


export enum ProductActionTypes {
    LoadProducts = '[Product] Load products',
    LoadProductsSuccess = '[Product] Products loaded',
}

export class LoadProducts implements Action {
    readonly type = ProductActionTypes.LoadProducts;

    constructor(public categoryId: string) { }
}

export class LoadProductsSuccess implements Action {
    readonly type = ProductActionTypes.LoadProductsSuccess;

    constructor(public products: Product[]) { }
}

export type ProductActions = LoadProducts | LoadProductsSuccess;