import { SubCategories } from 'src/app/data-acess/interfaces/subcategories-interface/subcategories';
import { SubcategoriesService } from 'src/app/data-acess/services/subcategories-service/subcategories.service';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/data-acess/interfaces/categories-interface/categories';
import { take } from 'rxjs';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-edit-sub',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ToastModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
  ],
  template: `<p-toast
      [showTransformOptions]="'translateY(100%)'"
      [showTransitionOptions]="'1000ms'"
      [hideTransitionOptions]="'1000ms'"
      [showTransformOptions]="'translateX(100%)'"></p-toast>
    <div class="flex flex-column m-8 gap-8">
      <div class="justify-content-center">
        <h1 style="color: blue" *ngIf="isEditMode">
          VOCÊ ESTÁ EDITANDO UMA SUBCATEGORIA...
        </h1>
        <h1 style="color: blue" *ngIf="!isEditMode">
          VOCÊ ESTÁ CRIANDO UMA SUBCATEGORIA...
        </h1>
      </div>
      <form [formGroup]="form">
        <div class="flex flex-column">
          <label>NOME DA CATEGORIA</label>
          <input class="mt-3" pInputText type="text" formControlName="categories" />
        </div>
        <div class="flex flex-column mt-5">
          <label>NOME DA SUBCATEGORIA</label>
          <input class="mt-3" pInputText type="text" formControlName="subCategories" />
        </div>
        <div class="mt-5">
          <p-button
            *ngIf="isEditMode"
            type="submit"
            [loading]="loadingS"
            (onClick)="updateSubCategories()"
            >Editar Subcategoria</p-button
          >
          <p-button *ngIf="!isEditMode" type="submit" (onClick)="createSubCategories()"
            >Criar Subcategoria</p-button
          >
        </div>
      </form>
    </div> `,
})
export class AddEditSubComponent implements OnInit {
  public categories: Category[] = [];
  public SubCategories: SubCategories[] = [];
  public id!: string | null;
  public isEditMode = false;
  public loadingS = false;
  public form: FormGroup = new FormGroup({});

  public activedRoute = inject(ActivatedRoute);
  public fb = inject(FormBuilder);
  public router = inject(Router);

  private _messageService = inject(MessageService);
  private _subcategoriesService = inject(SubcategoriesService);

  public ngOnInit(): void {
    this.form = new FormGroup({
      categories: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      subCategories: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
    this.id = this.activedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      this.isEditMode = true;
      this._subcategoriesService
        .getsubCategoriesById(this.id)
        .pipe(take(1))
        .subscribe(subCategory => {
          this.form.patchValue({
            categories: subCategory.category_name,
            subCategories: subCategory.subCategory_name,
          });
        });
    } else {
      this.isEditMode = false;
    }
  }

  public createSubCategories(): void {
    const newSubCategories = this.form.get('subCategories')?.value;
    const newCategories = this.form.get('categories')?.value;

    this._subcategoriesService
      .createSubCategories(newSubCategories, newCategories)
      .subscribe();
    this.loadingS = true;

    setTimeout(() => {
      this.loadingS = false;
      this.router.navigate(['/adm-home/list-categories-subcategories']);
    }, 3000);
    this._messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Produto atualizado com sucesso',
    });
  }

  public updateSubCategories(): void {
    const newSubCategories = this.form.get('subCategories')?.value;
    const newCategories = this.form.get('categories')?.value;

    this._subcategoriesService
      .updateSubCategories(newSubCategories, newCategories, this.id)
      .subscribe();

    this.loadingS = true;

    setTimeout(() => {
      this.loadingS = false;
      this.router.navigate(['/adm-home/list-categories-subcategories']);
    }, 3000);
    this._messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Produto atualizado com sucesso',
    });
  }
}
