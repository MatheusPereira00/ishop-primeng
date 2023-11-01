import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { SlideMenuModule } from 'primeng/slidemenu';
import { MenuModule } from 'primeng/menu';
import { RatingModule } from 'primeng/rating';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { CategorysService } from 'src/app/data-acess/services/categories-service/categorys.service';
import { FiltersService } from 'src/app/data-acess/services/filters-service/filters.service';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { AsyncPipe } from '@angular/common';
import { TranslocoRootModule } from 'src/app/shared/transloco/transloco-root.module';

@Component({
  selector: 'app-sidenav',
  template: `<ng-container *transloco="let transloco">
    <div
      class="card flex justify-content-center"
      *ngIf="getCategories$ | async as category">
      <p-sidebar [(visible)]="sidebarVisible" styleClass="w-23rem">
        <div Class="mt-8">
          <h1>{{ transloco('Filter') }}</h1>

          <div class="flex-auto mt-5">
            <label class="block mb-2" for="maxPrice"> {{ transloco('MaxPrice') }}</label>

            <p-inputNumber
              [(ngModel)]="price"
              inputId="maxPrice"
              mode="currency"
              currency="BRL"
              locale="pt-BR">
            </p-inputNumber>
          </div>

          <div class="mt-1">
            <p style="margin-top: 4rem; margin-bottom: 1rem">
              {{ transloco('FilterByCategory') }}
            </p>
            <div class="card flex justify-content-left">
              <div class="flex flex-column gap-2">
                <div *ngFor="let category of category" class="field-checkbox">
                  <p-checkbox
                    ngDefaultControl
                    name="group"
                    [value]="category.id"
                    [(ngModel)]="categories"
                    [inputId]="category.id + ''"></p-checkbox>
                  <label [for]="category.id">{{ category.category_name }}</label>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <p style="margin-bottom: 1rem">{{ transloco('FilterByRating') }}</p>
            <p-rating ngDefaultControl [(ngModel)]="rating"></p-rating>
          </div>
          <div class="flex mt-6">
            <p-button (onClick)="onFilterClick()" label="Aplicar Filtros"></p-button>
          </div>
        </div>
      </p-sidebar>
      <p-button (click)="toogleSidebarVisible()" icon="pi pi-bars"></p-button>
    </div>
  </ng-container>`,
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    SidebarModule,
    ButtonModule,
    SlideMenuModule,
    FormsModule,
    MenuModule,
    DividerModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    InputNumberModule,
    CommonModule,
    SliderModule,
    RatingModule,
    AsyncPipe,
    TranslocoRootModule,
  ],
})
export class SidenavComponent implements OnInit {
  public sidebarVisible = false;
  public value!: number;

  public price = 0;
  public rating = 0;
  public categories!: [];

  private _categoryService = inject(CategorysService);
  private _filtersService = inject(FiltersService);

  public getCategories$ = this._categoryService.getCategories$;

  public ngOnInit(): void {
    this._categoryService.getCategories();
  }

  public onFilterClick(): void {
    this._filtersService.price = this.price;
    this._filtersService.rating = this.rating;
    this._filtersService.categories = this.categories;
    this._filtersService.getRequests();
  }

  public toogleSidebarVisible(): void {
    this.sidebarVisible = true;
  }
}
