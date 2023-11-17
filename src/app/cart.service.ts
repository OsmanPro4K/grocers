import { EventEmitter, Injectable, Output } from '@angular/core';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private result = 0.0;
  private productsInCart: Product[] = [
    {
      name: "Tomato",
      price: 0.65,
      imageSrc: "https://www.bing.com/th?id=OIP.wEUDafUut5ckEZ_ILLHm_wHaE8&w=141&h=165&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2",
      amount: 1
    }
  ];
  @Output() newProducts = new EventEmitter<any>();
  @Output() newResult = new EventEmitter<any>();

  constructor() {}

  getProductsInCart() {
    return this.productsInCart;
  }
  updateProductsInCart(product: Product) {
    this.productsInCart.push(product);
    this.newProducts.emit(this.productsInCart);
  }

  getResult() {
    return this.result;
  }
  updateResult(products: Product[]) {
    let sum = 0.0
    for(let product of products) {
      sum += product.amount * product.price
    }
    this.result = sum;
    this.newResult.emit(this.result.toFixed(2));
  }

  deleteProduct(index: number) {
    this.productsInCart.splice(index, 1);
    this.newProducts.emit(this.productsInCart);
  }
}
