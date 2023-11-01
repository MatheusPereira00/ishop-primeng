import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { TranslocoRootModule } from 'src/app/shared/transloco/transloco-root.module';
import { User } from 'src/app/data-acess/interfaces/user-interface/usuario';
import { AuthService } from 'src/app/data-acess/services/auth-service/auth.service';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    CardModule,
    InputTextModule,
    ButtonModule,
    TranslocoRootModule,
    FormsModule,
    DividerModule,
  ],
  template: ` <div class="flex justify-content-center mt-8 mb-5">
      <h1>Acesse sua sua conta ou crie uma!</h1>
    </div>

    <div class="flex flex-column md:flex-row mt-8">
      <div
        class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3">
        <div class="flex flex-wrap justify-content-center align-items-center w-8">
          <label>Email</label>
          <input pInputText type="email" [(ngModel)]="usuario.email" class="ml-8" />
        </div>

        <div class="flex justify-content-center  gap-2 w-8" *transloco="let transloco">
          <label>{{ transloco('Password') }}</label>
          <input type="text" pInputText [(ngModel)]="usuario.password" class="ml-7" />
        </div>

        <div class="ml-8 mt-2">
          <p-button
            label="LOGIN"
            icon="pi pi-user"
            iconPos="left"
            styleClass="w-10rem mx-auto"
            (onClick)="login()"></p-button>
        </div>
      </div>

      <div class="w-full md:w-2">
        <p-divider layout="vertical" styleClass="hidden md:flex"><b>OR</b></p-divider>
        <p-divider layout="horizontal" styleClass="flex md:hidden" [align]="'center'"
          ><b>OR</b></p-divider
        >
      </div>
      <div class="w-full md:w-5 flex align-items-center justify-content-center py-5">
        <p-button
          routerLink="/account/create-account"
          label="FAÇA UM CADASTRO"
          icon="pi pi-user-plus"
          styleClass="p-button-success w-10rem"
          iconPos="left"></p-button>
      </div>
    </div>`,
})
export class LoginComponent {
  public usuario: User = new User('', '');

  private _authService = inject(AuthService);

  public login(): void {
    this._authService.login(this.usuario);
  }
}
