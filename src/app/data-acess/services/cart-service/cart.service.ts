import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Cart } from '../../interfaces/cart-interface/cart';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  public productCart: Cart[] = [];

  public http = inject(HttpClient);

  // PRICE TOTAL
  private _priceTotalSubject = new BehaviorSubject<number>(0);
  public readonly priceTotalSubject$ = this._priceTotalSubject.asObservable();

  // PRODUCT TOTAL
  private _productTotalSubject = new BehaviorSubject<number>(0);
  public readonly productTotalSubject$ = this._productTotalSubject.asObservable();

  constructor() {
    const data = localStorage.getItem('cart');
    if (data) {
      this.productCart = JSON.parse(data);
    }
  }

  // ADICIONAR PRODUTO
  public addCart(product: Cart): void {
    const checkList = this.productCart.find(prod => prod.id === product.id);
    if (!checkList) {
      this.productCart.push({
        ...product,
        quantityProduct: 1,
      });
    } else {
      const index = this.productCart.findIndex(prod => prod.id === product.id);
      this.productCart[index].quantityProduct++;
    }

    localStorage.setItem('cart', JSON.stringify(this.productCart));
  }

  // REMOVER PRODUTO
  public removeProduct(product: Cart): void {
    const index = this.productCart.findIndex(prod => prod.id === product.id);
    if (index !== -1) {
      this.productCart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(this.productCart));
  }

  // INCREMENTAR PRODUTO
  public increaseProduct(product: Cart): void {
    const index = this.productCart.findIndex(prod => prod.id === product.id);

    if (index !== -1) {
      product.quantityProduct++;
    }
    localStorage.setItem('cart', JSON.stringify(this.productCart));
  }

  // DECREMETAR PRODUTO
  public decreaseProducts(product: Cart): void {
    const index = this.productCart.findIndex(prod => prod.id === product.id);

    if (index !== -1 && product.quantityProduct > 1) {
      product.quantityProduct--;
    }
    localStorage.setItem('cart', JSON.stringify(this.productCart));
  }

  // TOTAL DE PRODUTO NO CARRINHO
  public totalProducts(): void {
    const totalProducts = this.productCart.reduce(
      (total, product) => total + product.quantityProduct,
      0
    );
    this._productTotalSubject.next(totalProducts);
  }

  // VALOR TOTAL NO CARRINHO
  public totalPrice(): void {
    const total = this.productCart.reduce((price, product) => {
      return price + product.unitPrice * product.quantityProduct;
    }, 0);
    this._priceTotalSubject.next(total);
  }

  public getItems(): any {
    return this.productCart;
  }
}
