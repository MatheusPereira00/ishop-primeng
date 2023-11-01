import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CategorysService } from 'src/app/data-acess/services/categories-service/categorys.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-list-cate',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    TagModule,
    ButtonModule,
    NgFor,
    RouterLink,
    ToastModule,
    ConfirmDialogModule,
    AsyncPipe,
  ],
  template: `<p-toast></p-toast>
    <p-confirmDialog #cd [style]="{ height: '8vw', width: '40vw' }">
      <ng-template pTemplate="header">
        <h3 class="m-auto">REMOVER CATEGORIA</h3>
      </ng-template>
      <ng-template pTemplate="footer">
        <button
          type="button"
          pButton
          icon="pi pi-times"
          label="Não"
          (click)="cd.reject()"></button>
        <button
          type="button"
          pButton
          icon="pi pi-check"
          label="Sim"
          (click)="cd.accept()"></button>
      </ng-template>
    </p-confirmDialog>
    <div class="m-8">
      <p-button [routerLink]="['add']"> + ADICIONAR CATEGORIA </p-button>
    </div>

    <div *ngIf="getCategories$ | async as categories">
      <p-table styleClass="m-8" [value]="categories" [rows]="15" [paginator]="true">
        <ng-template pTemplate="caption" let-categories>
          <div class="flex align-items-center justify-content-between">
            CATEGORIAS
            <p-button icon="pi pi-refresh"></p-button>
          </div>
        </ng-template>
        <ng-template pTemplate="header">
          <tr>
            <th>CATEGORIAS</th>
            <th>ID</th>
          </tr>
        </ng-template>

        <ng-template pTemplate="body" let-categories>
          <tr>
            <td>{{ categories.category_name }}</td>
            <td>{{ categories.id }}</td>
            <td>
              <p-button
                [routerLink]="['edit', categories.id]"
                label="editar"
                styleClass="p-button-success"
                class="m-1"></p-button>
              <p-button
                (onClick)="removeProduct(categories.id)"
                label="deletar"
                styleClass="p-button-danger"></p-button>
            </td>
          </tr>
        </ng-template>

        <ng-template pTemplate="summary">
          <div class="flex align-items-center justify-content-between">
            Total de produtos no carrinho: 00
          </div>
        </ng-template>
      </p-table>
    </div>`,
  providers: [ConfirmationService, MessageService],
})
export class ListCateComponent implements OnInit {
  public id!: number;

  private _categorysService = inject(CategorysService);
  private _messageService = inject(MessageService);
  private _confirmationService = inject(ConfirmationService);

  public getCategories$ = this._categorysService.getCategories$;

  public ngOnInit(): void {
    this._categorysService.getCategories();
  }

  public removeProduct(id: string | null): void {
    this._confirmationService.confirm({
      message: 'Tem certeza que deseja remover a categoria?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._categorysService.deletCategories(id).subscribe();
        this._messageService.add({
          severity: 'success',
          summary: 'Operação confimada',
          detail: 'Categoria removida com sucesso',
        });
        location.reload();
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this._messageService.add({
              severity: 'error',
              summary: 'Operação cancelada',
              detail: 'continue editando',
            });
            break;
        }
      },
    });
  }
}
