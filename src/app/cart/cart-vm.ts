import { Product } from '../model/product';

export class CartVm {
    constructor(
        public items: Array<CartItemVm>,
        public count: number,
        public total: number) { }
}

export class CartItemVm {
    constructor(
        public product: Product,
        public quantity: number,
        public total: number) { }
}