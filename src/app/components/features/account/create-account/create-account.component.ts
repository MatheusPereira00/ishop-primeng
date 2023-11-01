import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { TranslocoRootModule } from 'src/app/shared/transloco/transloco-root.module';
import { DividerModule } from 'primeng/divider';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    ReactiveFormsModule,
    FormsModule,
    PasswordModule,
    TranslocoRootModule,
    DividerModule,
    ToastModule,
  ],
  providers: [MessageService],
  template: ` <ng-container *transloco="let transloco">
    <p-toast></p-toast>
    <form [formGroup]="createAccountForm" (ngSubmit)="onSubmit()">
      <div class="flex justify-content-center mt-8 mb-5">
        <h1>Crie sua sua conta aqui!</h1>
      </div>

      <div class="flex flex-column md:flex-row mt-8">
        <div
          class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-2">
          <div class="flex justify-content-center align-items-center w-8">
            <label class="w-5">{{ transloco('Name') }}</label>
            <input pInputText type="text" formControlName="name" class="ml-7 w-5" />
          </div>

          <div class="flex justify-content-center align-items-center w-8">
            <label class="w-5">CPF</label>
            <input pInputText type="number" formControlName="cpf" class="ml-7 w-5" />
          </div>

          <div class="flex align-items-center w-8">
            <label class="w-6 ml-4">{{ transloco('Date') }}</label>
            <input
              pInputText
              type="date"
              formControlName="dataNascimento"
              class="ml-2 w-5" />
          </div>

          <div class="flex align-items-center w-8">
            <label class="w-5 ml-4">Email</label>
            <input pInputText type="email" formControlName="email" class="ml-7 w-5" />
          </div>
        </div>

        <div class="w-full md:w-2">
          <p-divider layout="vertical" styleClass="hidden md:flex"><b>OR</b></p-divider>
          <p-divider layout="horizontal" styleClass="flex md:hidden" [align]="'center'"
            ><b>OR</b></p-divider
          >
        </div>

        <div
          class="w-full md:w-5 flex flex-column align-items-center justify-content-center gap-3">
          <div class="flex justify-content-center align-items-center w-8">
            <label class="w-6 ml-3">{{ transloco('PhoneNumber') }}</label>
            <input type="number" pInputText formControlName="telefone" class="ml-2 w-5" />
          </div>

          <div class="flex justify-content-center gap-2 w-8">
            <label class="w-6 ml-4">{{ transloco('Password') }}</label>
            <p-password
              formControlName="senha"
              [toggleMask]="true"
              class="ml-2 w-5"></p-password>
          </div>

          <div class="flex justify-content-center gap-2 w-8">
            <label class="w-6 ml-4">{{ transloco('ConfirmPassword') }}</label>
            <p-password
              formControlName="confirmarSenha"
              [toggleMask]="true"
              class="ml-2 w-5"></p-password>
          </div>
        </div>
      </div>

      <div class="flex justify-content-center mt-8">
        <p-button
          label="FINALIZAR CADASTRO"
          icon="pi pi-angle-right"
          iconPos="left"
          type="submit"></p-button>
      </div>
    </form>
  </ng-container>`,
})
export class CreateAccountComponent {
  private _route = inject(Router);
  private _messageService = inject(MessageService);

  public createAccountForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    cpf: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    dataNascimento: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    telefone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    senha: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    confirmarSenha: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  public onSubmit(): void {
    this.createAccountForm.value;
    this._messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
    setTimeout(() => {
      this._route.navigate(['account']);
    }, 3000);
  }
}
