import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class Cart {
    //TODO: Maybe rename this to CartService
    //TODO: Shouldn't the cart belong to a user?

    public items: Array<CartItem>;

    constructor() {
        if (localStorage.getItem('cart')) {
            var cart = JSON.parse(localStorage.getItem('cart'));
            this.items = cart.map(item => new CartItem(item.product, item.quantity));
        } else {
            this.items = new Array<CartItem>();
        }
    }

    get count() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    get total() {
        return this.items.reduce((sum, item) => sum + item.total, 0);
    }

    addItem(cartItem: CartItem) {
        this.items.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(this.items));
        //TODO: maybe save just the product id and quantity
    }
}

export class CartItem {
    constructor(public product: Product,
        public quantity: number) { }

    public get total() {
        return this.product.price * this.quantity;
    }
}