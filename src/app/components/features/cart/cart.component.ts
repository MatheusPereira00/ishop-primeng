import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { CartServiceService } from '../../../data-acess/services/cart-service/cart.service';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { Cart } from 'src/app/data-acess/interfaces/cart-interface/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,

  imports: [
    CommonModule,
    TableModule,
    TagModule,
    ButtonModule,
    RatingModule,
    ToastModule,
    ConfirmDialogModule,
    RouterLink,
  ],
  templateUrl: './cart.component.html',
  providers: [ConfirmationService, MessageService],
})
export class CartComponent implements OnInit {
  public productCart: Cart[] = [];
  public _cartService = inject(CartServiceService);

  private _messageService = inject(MessageService);
  private _confirmationService = inject(ConfirmationService);

  public priceTotalSubject$ = this._cartService.priceTotalSubject$;
  public productTotalSubject$ = this._cartService.productTotalSubject$;

  constructor() {
    this.productCart = this._cartService.getItems();
  }

  public ngOnInit(): void {
    this._cartService.totalPrice();
  }

  // INCREMETAR E DECREMENTAR PRODUTOS
  public increaseProduct(product: Cart): void {
    this._cartService.increaseProduct(product);
    this._cartService.totalPrice();
  }
  public decreaseProducts(product: Cart): void {
    this._cartService.decreaseProducts(product);
    this._cartService.totalPrice();
  }

  // REMOVER PRODUTOS
  public removeProduct(product: Cart): void {
    this._confirmationService.confirm({
      message: 'Tem certeza que deseja remover produto do carrinho?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._cartService.removeProduct(product);
        this._messageService.add({
          severity: 'success',
          summary: 'Operação confimada',
          detail: 'Produto removido com sucesso',
        });
        this._cartService.totalPrice();
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this._messageService.add({
              severity: 'error',
              summary: 'Operação cancelada',
              detail: 'continue comprando',
            });
            break;
        }
      },
    });
  }
}
