import { Injectable } from '@nestjs/common';
import { CartItem, Cart } from './interfaces/cart.interface';

@Injectable()
export class CartsService {
  private initializeCart(): any {
    return {
      items: [],
      total: 0,
    };
  }

  // TESTED
  getCart(session: any): Cart {
    if (!session.cart) {
      session.cart = this.initializeCart();
    }
    console.log(session.cart)
    return session.cart;
  }
  // TESTED
  addToCart(session: any, product: any, quantity: number = 1) {
    const cart = this.getCart(session);
    const existingItem = cart.items.find(item => item.productID === product.productID);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const {productID, name, price, image} = product
      cart.items.push({ productID, name, price, quantity, image })
    }

    cart.total = this.calculateTotal(cart.items);
    session.cart = cart;
    return cart;
  }

  removeFromCart(session: any, productID: number) {
    const cart = this.getCart(session);
    cart.items = cart.items.filter(item => item.productID !== productID);
    cart.total = this.calculateTotal(cart.items);
    session.cart = cart;
    return cart;
  }

  updateQuantity(session: any, productID: number, quantity: number) {
    const cart = this.getCart(session);
    const item = cart.items.find(item => item.productID === productID);
    if (item) {
      item.quantity = quantity;
      cart.total = this.calculateTotal(cart.items);
    }
    session.cart = cart;
    return cart;
  }

  private calculateTotal(items: CartItem[]): number {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  clearCart(session: any) {
    session.cart = this.initializeCart();
    return session.cart;
  }
}