import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../product.interface';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'Tomato',
      price: 0.65,
      imageSrc:
        'https://www.bing.com/th?id=OIP.wEUDafUut5ckEZ_ILLHm_wHaE8&w=141&h=165&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2',
      amount: 0,
    },
    {
      name: 'Carrot',
      price: 0.5,
      imageSrc:
        'data:image/jpeg;base64,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',
      amount: 0,
    },
  ];

  constructor(private cartService: CartService) {}

  onAddToCartClicked(newProduct: Product) {
    this.cartService.updateProductsInCart(newProduct);
  }

  incrementItemAmount(product: Product) {
    product.amount++;
  }
  decrementItemAmount(product: Product) {
    product.amount--;
    if (product.amount < 0) {
      product.amount = 0;
    }
  }
}
