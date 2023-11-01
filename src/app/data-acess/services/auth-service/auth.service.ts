import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../interfaces/user-interface/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _messageService = inject(MessageService);
  private _route = inject(Router);

  // public isUserLogged = false;

  private _isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this._isLoggedInSubject.asObservable();

  private _isAdminSubject = new BehaviorSubject<boolean>(false);
  public isAdmin$ = this._isAdminSubject.asObservable();

  public login(user: User): void {
    if (user.email === 'admin' && user.password === '123') {
      // user.role === 'admin';
      this._isLoggedInSubject.next(true);
      this._isAdminSubject.next(true);
      // this.isUserLogged = true;
      localStorage.setItem('loginAdm', JSON.stringify(user));
      this.messageLoginAdm();
      setTimeout(() => {
        this._route.navigate(['adm-home']);
      }, 3000);
    } else if (user.email === 'user' && user.password === '123') {
      // user.role === 'regular';
      this._isLoggedInSubject.next(true);
      this._isAdminSubject.next(false);
      this.messageLoginUser();
      setTimeout(() => {
        this._route.navigate(['/']);
      }, 3000);
    } else {
      this._isLoggedInSubject.next(false);
      this._isAdminSubject.next(false);
      this.messgeErrorLogin();
    }
  }

  public messageLoginAdm(): void {
    this._messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Bem vindo ADM',
    });
  }
  public messageLoginUser(): void {
    this._messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Bem vindo Usuario',
    });
  }

  public messgeErrorLogin(): void {
    this._messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Você não tem uma conta criada',
    });
  }
}
