import { SubCategories } from 'src/app/data-acess/interfaces/subcategories-interface/subcategories';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SubcategoriesService {
  private _http = inject(HttpClient);

  private _getSubCategoriesBehavior = new BehaviorSubject<SubCategories[]>([]);
  public getSubCategories$ = this._getSubCategoriesBehavior.asObservable();

  public getSubCategories(): void {
    this._http
      .get<SubCategories[]>(`${environment.apiUrl}/subcategorys`)
      .subscribe(subCategories => {
        this._getSubCategoriesBehavior.next(subCategories);
      });
  }

  public getsubCategoriesById(id: string | null): Observable<SubCategories> {
    return this._http.get<SubCategories>(`${environment.apiUrl}/subcategorys/${id}`);
  }

  public deletSubCategories(id: string | null): Observable<SubCategories> {
    return this._http.delete<SubCategories>(`${environment.apiUrl}/subcategorys/${id}`);
  }

  public updateSubCategories(
    subCategories: string,
    categories: string,
    id: string | null
  ): Observable<SubCategories> {
    const updateSubCategories = {
      subCategory_name: subCategories,
      category_name: categories,
    };
    return this._http.put<SubCategories>(
      `${environment.apiUrl}/subcategorys/${id}`,
      updateSubCategories
    );
  }

  public createSubCategories(
    subCategories: string,
    categories: string
  ): Observable<SubCategories> {
    const createSubCategories = {
      subCategory_name: subCategories,
      category_name: categories,
    };
    return this._http.post<SubCategories>(
      `${environment.apiUrl}/subcategorys`,
      createSubCategories
    );
  }
}
