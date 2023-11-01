import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    RouterLink,
  ],
  template: `<div class="m-8">
    <p-card>
      <form [formGroup]="cadastroForm" (ngSubmit)="onSubmit()">
        <div class="mb-6">
          <h1>INFORMAÇÕES PAGAMENTO</h1>
          <p>PREENCHA O FORMULARIO</p>
        </div>
        <div class="p-fluid">
          <div class="field">
            <label for="firstname">NOME CARTÃO</label>
            <input pInputText formControlName="name" />
          </div>
          <div class="field">
            <label for="lastname">NUMERO</label>
            <input id="lastname" type="number" pInputText formControlName="email" />
          </div>
          <div class="field">
            <label>DATA</label>
            <input id="age" type="date" pInputText formControlName="senha" />
          </div>
          <div class="field">
            <label>CCV</label>
            <input id="age" type="number" pInputText formControlName="confirmarSenha" />
          </div>
        </div>

        <div>
          <div class="grid grid-nogutter justify-content-end mt-5">
            <p-button
              routerLink="/checkout/confirmacao"
              label="Next"
              icon="pi pi-angle-right"
              iconPos="right"
              type="submit"></p-button>
          </div>
        </div>
      </form>
    </p-card>
  </div> `,
})
export class PaymentComponent {
  public cadastroForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    senha: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    confirmarSenha: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    cpf: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    rg: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    dataNascimento: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    telefone: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  public onSubmit(): void {
    this.cadastroForm;
  }
}
