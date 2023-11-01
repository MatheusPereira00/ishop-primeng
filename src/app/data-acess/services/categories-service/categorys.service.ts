import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../../interfaces/categories-interface/categories';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategorysService {
  public categories!: Category[];
  private _http = inject(HttpClient);

  private _getCategoriesBehavior = new BehaviorSubject<Category[]>([]);
  public getCategories$ = this._getCategoriesBehavior.asObservable();

  public getCategories(): void {
    this._http.get<Category[]>(`${environment.apiUrl}/category`).subscribe(categories => {
      this._getCategoriesBehavior.next(categories);
    });
  }

  public getCategoriesById(id: string | null): Observable<Category> {
    return this._http.get<Category>(`${environment.apiUrl}/category/${id}`);
  }

  public deletCategories(id: string | null): Observable<Category> {
    return this._http.delete<Category>(`${environment.apiUrl}/category/${id}`);
  }

  public updateCategories(category: string, id: string | null): Observable<Category> {
    const updateCategory = { category_name: category };
    return this._http.patch<Category>(
      `${environment.apiUrl}/category/${id}`,
      updateCategory
    );
  }
  public createCategories(category: string): Observable<Category> {
    const createCategory = { category_name: category };
    return this._http.post<Category>(`${environment.apiUrl}/category`, createCategory);
  }
}
