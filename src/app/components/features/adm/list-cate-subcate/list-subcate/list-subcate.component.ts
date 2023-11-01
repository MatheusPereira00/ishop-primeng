import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { SubcategoriesService } from 'src/app/data-acess/services/subcategories-service/subcategories.service';
import { RouterLink } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { AsyncPipe } from '@angular/common';
import { take } from 'rxjs';

@Component({
  selector: 'app-list-subcate',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    TagModule,
    TableModule,
    RouterLink,
    ToastModule,
    ConfirmDialogModule,
    AsyncPipe,
  ],
  template: `<p-toast></p-toast>
    <p-confirmDialog #cd [style]="{ height: '8vw', width: '40vw' }">
      <ng-template pTemplate="header">
        <h3 class="m-auto">REMOVER SUBCATEGORIA</h3>
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
      <p-button [routerLink]="['subcategories/add']"> + ADICIONAR SUBCATEGORIA </p-button>
    </div>

    <div *ngIf="getSubCategories$ | async as subCategories">
      <p-table styleClass="m-8" [value]="subCategories" [rows]="15" [paginator]="true">
        <ng-template pTemplate="caption">
          <div class="flex align-items-center justify-content-between">
            SUBCATEGORIAS
            <p-button icon="pi pi-refresh"></p-button>
          </div>
        </ng-template>
        <ng-template pTemplate="header">
          <tr>
            <th>NOME DA SUBCATEGORIAS</th>
            <th>NOME DA CATEGORIAS</th>
            <th>ID</th>
          </tr>
        </ng-template>

        <ng-template pTemplate="body" let-subCategories>
          <tr>
            <td>{{ subCategories.subCategory_name }}</td>
            <td>{{ subCategories.category_name }}</td>
            <td>{{ subCategories.id }}</td>
            <td>
              <p-button
                label="editar"
                styleClass="p-button-success"
                class="m-1"
                [routerLink]="['subcategories', subCategories.id]"></p-button>
              <p-button
                label="deletar"
                styleClass="p-button-danger"
                (click)="removeSubCategories(subCategories.id)"></p-button>
            </td>
          </tr>
        </ng-template>
        <ng-template pTemplate="summary">
          <div class="flex align-items-center justify-content-between">
            Total de produtos no carrinho: 00
          </div>
        </ng-template>
      </p-table>
    </div> `,
  providers: [ConfirmationService, MessageService],
})
export class ListSubcateComponent implements OnInit {
  public id!: string | null;

  private _subCategoriesService = inject(SubcategoriesService);
  public getSubCategories$ = this._subCategoriesService.getSubCategories$;

  private _messageService = inject(MessageService);
  private _confirmationService = inject(ConfirmationService);

  public ngOnInit(): void {
    this._subCategoriesService.getSubCategories();
  }

  public removeSubCategories(id: string | null): void {
    this._confirmationService.confirm({
      message: 'Tem certeza que deseja remover a SubCategoria?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this._subCategoriesService.deletSubCategories(id).pipe(take(1)).subscribe();
        this._messageService.add({
          severity: 'success',
          summary: 'Operação confimada',
          detail: 'SubCategoria removida com sucesso',
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
