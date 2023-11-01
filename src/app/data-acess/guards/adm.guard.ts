import { inject, Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdmGuard implements CanActivate {
  private _route = inject(Router);

  public canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const hasToken = Boolean(localStorage.getItem('loginAdm'));
    if (hasToken) {
      return true;
    } else {
      this._route.navigate(['/account']);
    }
    return false;
  }
}
