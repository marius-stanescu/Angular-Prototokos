import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class Cart {

    public items: CartItem[] = [];

    constructor(items?: CartItem[]) {
        this.items = items || [];
    }

    get count() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    get total() {
        return this.items.reduce((sum, item) => sum + item.total, 0);
    }
}

export class CartItem {
    constructor(public product: Product,
        public quantity: number) { }

    public get total() {
        return this.product.price * this.quantity;
    }
}