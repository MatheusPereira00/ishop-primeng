import { ActivatedRoute, Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CategorysService } from 'src/app/data-acess/services/categories-service/categorys.service';
import { Category } from 'src/app/data-acess/interfaces/categories-interface/categories';
import { take } from 'rxjs';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-edit-cate',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    ToastModule,
    ConfirmDialogModule,
  ],
  providers: [MessageService],
  template: `
    <p-toast
      [showTransformOptions]="'translateY(100%)'"
      [showTransitionOptions]="'1000ms'"
      [hideTransitionOptions]="'1000ms'"
      [showTransformOptions]="'translateX(100%)'"></p-toast>
    <div class="flex flex-column m-8 gap-8">
      <div class="justify-content-center">
        <h1 style="color: blue;" *ngIf="isEditMode">
          VOCÊ ESTÁ EDITANDO UMA CATEGORIA...
        </h1>
        <h1 style="color: blue;" *ngIf="!isEditMode">
          VOCÊ ESTÁ CRIANDO UMA CATEGORIA...
        </h1>
      </div>
      <form [formGroup]="formCate">
        <div class="flex flex-column">
          <label>NOME DA CATEGORIA</label>
          <input class=" mt-3" pInputText type="text" formControlName="categoria" />
        </div>
        <div class="mt-5">
          <p-button
            [loading]="loadingC"
            *ngIf="isEditMode"
            (onClick)="updateCategory()"
            type="submit"
            >Editar categoria</p-button
          >
          <p-button *ngIf="!isEditMode" type="submit" (onClick)="createCategory()"
            >Criar categoria</p-button
          >
        </div>
      </form>
    </div>
  `,
})
export class AddEditCateComponent implements OnInit {
  public categories: Category[] = [];
  public id!: string | null;
  public isEditMode = false;
  public loadingC = false;
  public formCate: FormGroup = new FormGroup({});

  public router = inject(Router);
  public activatedRoute = inject(ActivatedRoute);
  private _categoriesService = inject(CategorysService);
  private _messageService = inject(MessageService);

  public ngOnInit(): void {
    this.getCategoriesById();
  }

  public getCategoriesById(): void {
    this.formCate = new FormGroup({
      categoria: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });

    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this.isEditMode = true;
      this._categoriesService
        .getCategoriesById(this.id)
        .pipe(take(1))
        .subscribe(category => {
          this.formCate.setValue({ categoria: category.category_name });
        });
    } else {
      this.isEditMode = false;
    }
  }

  public createCategory(): void {
    const newCategory = this.formCate.get('categoria')?.value;

    this._categoriesService.createCategories(newCategory).subscribe();
    this.loadingC = true;

    setTimeout(() => {
      this.loadingC = false;
      this.router.navigate(['/adm-home/list-categories-subcategories']);
    }, 3000);
    this._messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Produto atualizado com sucesso',
    });
  }

  public updateCategory(): void {
    const newCategory = this.formCate.get('categoria')?.value;

    this._categoriesService.updateCategories(newCategory, this.id).subscribe();

    this.loadingC = true;

    setTimeout(() => {
      this.loadingC = false;
      this.router.navigate(['/adm-home/list-categories-subcategories']);
    }, 3000);
    this._messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Produto atualizado com sucesso',
    });
  }
}
