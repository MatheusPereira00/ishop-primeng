import { environment } from '../../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../../interfaces/products-interface/products';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public relatedProducts!: Product[];

  private _relatedProductsBehavior = new BehaviorSubject<Product[]>([]);
  public readonly relatedProducts$ = this._relatedProductsBehavior.asObservable();

  private _http = inject(HttpClient);

  public getProducts(
    categoryIds: string,
    maxPrice: number,
    minRating: number
  ): Observable<Product[]> {
    let params = new HttpParams();

    if (categoryIds) {
      params = params.append('category_id_like', categoryIds);
    }

    if (maxPrice) {
      params = params.append('unitPrice_lte', maxPrice);
    }

    if (minRating) {
      params = params.append('rating_gte', minRating);
    }

    return this._http.get<Product[]>(`${environment.apiUrl}/products`, {
      params,
    });
  }

  public getProductById(id: number): Observable<Product[]> {
    let url = `${environment.apiUrl}/products`;
    url += `?id=${id}`;
    return this._http.get<Product[]>(url);
  }

  // public getProductById(id: string | null): Observable<Product> {
  //   return this._http.get<Product>(`${environment.apiUrl}/products/${id}`);
  // }

  // public deletProducts(id: string | null): Observable<Product> {
  //   return this._http.delete<Product>(`${environment.apiUrl}/products/${id}`);
  // }

  // public postProduct(product: newProduct): Observable<newProduct> {
  //   return this._http.post<newProduct>(`${environment.apiUrl}/products`, product);
  // }

  public getRelatedProducts(): void {
    this._http
      .get<Product[]>(`${environment.apiUrl}/products`)
      .subscribe(relatedProducts => {
        this._relatedProductsBehavior.next(relatedProducts);
      });
  }
}
