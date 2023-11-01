import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

import { Product } from 'src/app/data-acess/interfaces/products-interface/products';
import { ProductsService } from 'src/app/data-acess/services/product-service/products.service';
import { take } from 'rxjs';
import { FiltersService } from 'src/app/data-acess/services/filters-service/filters.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-lis-products',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  template: `<div Class="m-8">
      <p-button
        [loading]="loadingA"
        (onClick)="loadA()"
        label=" + ADICIONAR NOVO PRODUTO"></p-button>
    </div>
    <p-table styleClass="m-8" [value]="product" [rows]="5" [paginator]="true">
      <ng-template pTemplate="caption" let-categories>
        <div class="flex align-items-center justify-content-between">
          PRODUTOS
          <p-button icon="pi pi-refresh"></p-button>
        </div>
      </ng-template>
      <ng-template pTemplate="header">
        <tr>
          <th>NOMDE DOS PRODUTOS</th>
          <th>ID</th>
        </tr>
      </ng-template>

      <ng-template pTemplate="body" let-product>
        <tr>
          <td>{{ product.name }}</td>
          <td>{{ product.id }}</td>
          <td>
            <p-button label="editar" styleClass="p-button-success" class="m-1"></p-button>
            <p-button label="deletar" styleClass="p-button-danger"></p-button>
          </td>
        </tr>
      </ng-template>

      <ng-template pTemplate="summary">
        <div class="flex align-items-center justify-content-between">
          Total de produtos no carrinho: 00
        </div>
      </ng-template>
    </p-table> `,
})
export class ListProductsComponent implements OnInit {
  public product: Product[] = [];
  public loadingA = false;
  public usuarioAutenticado!: '';

  private _productsService = inject(ProductsService);
  private _filtersService = inject(FiltersService);

  public ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(): void {
    const categoryIds = this._filtersService.categories.join('|');

    this._productsService
      .getProducts(categoryIds, this._filtersService.price, this._filtersService.rating)
      .pipe(take(1))
      .subscribe(products => {
        this.product = products;
      });
  }

  public loadA(): void {
    this.loadingA = true;

    setTimeout(() => {
      this.loadingA = false;
    }, 2000);
  }

  // public removeProduct(id: string | null): void {
  //   this._confirmationService.confirm({
  //     message: 'Tem certeza que deseja remover o produto?',
  //     icon: 'pi pi-exclamation-triangle',
  //     accept: () => {
  //       this._productsService.deletProducts(id).subscribe();
  //       this._messageService.add({
  //         severity: 'success',
  //         summary: 'Operação confimada',
  //         detail: 'Categoria removida com sucesso',
  //       });
  //       location.reload();
  //     },
  //     reject: (type: ConfirmEventType) => {
  //       switch (type) {
  //         case ConfirmEventType.REJECT:
  //           this._messageService.add({
  //             severity: 'error',
  //             summary: 'Operação cancelada',
  //             detail: 'continue editando',
  //           });
  //           break;
  //       }
  //     },
  //   });
  // }
}
