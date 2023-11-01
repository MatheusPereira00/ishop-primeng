import { Product } from '../../../../data-acess/interfaces/products-interface/products';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../../data-acess/services/product-service/products.service';
import { FiltersService } from 'src/app/data-acess/services/filters-service/filters.service';
import { CartServiceService } from '../../../../data-acess/services/cart-service/cart.service';
import { RouterLink } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Cart } from 'src/app/data-acess/interfaces/cart-interface/cart';
import { TranslocoRootModule } from 'src/app/shared/transloco/transloco-root.module';

@Component({
  selector: 'app-products-list',
  standalone: true,
  templateUrl: './products-list.component.html',
  styleUrls: [],
  imports: [
    CommonModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    DataViewModule,
    RouterLink,
    ToastModule,
    AvatarModule,
    AvatarGroupModule,
    ConfirmDialogModule,
    TranslocoRootModule,
  ],
  providers: [MessageService, AvatarGroupModule, ConfirmationService],
})
export class ProductsListComponent implements OnInit {
  public products: Product[] = [];
  public productsCart: Cart[] = [];
  public destroyRef = inject(DestroyRef);

  private _productsService = inject(ProductsService);
  private _cartService = inject(CartServiceService);
  private _messageService = inject(MessageService);
  private _filtersService = inject(FiltersService);

  public getFilteredProducts$ = this._filtersService.getFilteredProducts$.pipe(
    tap(() => this.getProducts())
  );

  public ngOnInit(): void {
    this.getProducts();
  }

  /**
   * Método para obtenção dos parametros de filtros de produtos selecionados
   * e chamada do método getProducts do serviço de produtos (_productsService)
   * @returns void
   */

  public getProducts(): void {
    const selectedCategoriesAsString = this._filtersService.categories.join('|');

    const { price, rating } = this._filtersService;

    this._productsService
      .getProducts(selectedCategoriesAsString, price, rating)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(products => {
        this.products = products;
      });
  }

  public addCart(product: Cart): void {
    this._cartService.addCart(product);
    this._messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Produto adicionado com sucesso',
    });
  }
}
