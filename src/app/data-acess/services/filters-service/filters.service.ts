import { Filters } from '../../interfaces/filters-interface/filters';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  public categories = [];
  public price = 0;
  public rating = 0;

  private _getFilteredProductsSubject = new Subject<Filters>();
  public getFilteredProducts$ = this._getFilteredProductsSubject.asObservable();

  public getRequests(): void {
    const filters = {
      price: this.price,
      rating: this.rating,
      categories: this.categories,
    };
    this._getFilteredProductsSubject.next(filters);
  }
}
