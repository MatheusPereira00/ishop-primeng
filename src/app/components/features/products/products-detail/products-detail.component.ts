import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../../../data-acess/services/product-service/products.service';
import { Product } from '../../../../data-acess/interfaces/products-interface/products';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CarouselComponent } from '../../../../shared/carousel/carousel.component';

@Component({
  selector: 'app-products-detail',
  standalone: true,
  templateUrl: './products-detail.component.html',
  styleUrls: [],
  imports: [
    CommonModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    CarouselComponent,
  ],
})
export class ProductsDetailComponent implements OnInit {
  public products: Product[] = [];
  public id!: string | null;

  private _productsService = inject(ProductsService);
  private _route = inject(ActivatedRoute);

  public ngOnInit(): void {
    this.getParamsByRouter();
    this.getProductsById();
  }

  public getProductsById(): void {
    this._productsService.getProductById(Number(this.id)).subscribe(productsById => {
      this.products = productsById;
    });
  }

  public getParamsByRouter(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    });
  }
}
