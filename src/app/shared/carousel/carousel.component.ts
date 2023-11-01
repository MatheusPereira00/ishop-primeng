import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ProductsService } from 'src/app/data-acess/services/product-service/products.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselModule, ButtonModule, AsyncPipe],
  template: `<h1 style="margin-left: 5rem">PRODUTOS RELACIONADOS</h1>
    <div *ngIf="relatedProducts$ | async as products">
      <p-carousel [value]="products" [numVisible]="3" [numScroll]="3" [circular]="false">
        <ng-template let-product pTemplate="item">
          <div class="border-1 surface-border border-round m-2 text-center py-5 px-3">
            <div class="mb-3">
              <img src=" {{ product.imageUrl }} " style="width: 8rem; cursor: pointer" />
            </div>
            <div>
              <h4 class="mb-1">{{ product.name }}</h4>
              <h6 class="mt-0 mb-3">{{ '$' + product.price }}</h6>
              <div class="car-buttons mt-5">
                <p-button
                  type="button"
                  styleClass="p-button p-button-rounded mr-2"
                  icon="pi pi-search"></p-button>
                <p-button
                  type="button"
                  styleClass="p-button-success p-button-rounded mr-2"
                  icon="pi pi-star-fill"></p-button>
              </div>
            </div>
          </div>
        </ng-template>
      </p-carousel>
    </div>`,
})
export class CarouselComponent implements OnInit {
  private _productsService = inject(ProductsService);
  public relatedProducts$ = this._productsService.relatedProducts$;

  public ngOnInit(): void {
    this._productsService.getRelatedProducts();
  }
}
