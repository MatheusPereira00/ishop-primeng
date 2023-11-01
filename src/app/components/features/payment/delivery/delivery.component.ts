import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
    InputTextModule,
    RouterLink,
  ],
  template: `<div class="m-8">
    <p-card>
      <form [formGroup]="cadastroForm" (ngSubmit)="onSubmit()">
        <div class="mb-6">
          <h1>INFORMAÇÕES DO ENVIO</h1>
          <p>PREENCHA O FORMULARIO</p>
        </div>
        <div class="p-fluid">
          <div class="field">
            <label for="firstname">LOGRADOURO</label>
            <input pInputText type="text" formControlName="logradouro" />
          </div>
          <div class="field">
            <label for="lastname">NUMERO</label>
            <input id="lastname" type="number" pInputText formControlName="numero" />
          </div>
          <div class="field">
            <label for="lastname">CEP</label>
            <input id="lastname" type="number" pInputText formControlName="cep" />
          </div>
          <div class="field">
            <label>COMPLEMENTO</label>
            <input type="text" pInputText formControlName="complemento" />
          </div>
          <div class="field">
            <label>REFERENCIA</label>
            <input type="text" pInputText formControlName="referencia" />
          </div>
          <div class="field">
            <label>BAIRRO</label>
            <input type="text" pInputText formControlName="bairro" />
          </div>
          <div class="field">
            <label>CIDADE</label>
            <input type="text" pInputText formControlName="cidade" />
          </div>
          <div class="field">
            <label>ESTADO</label>
            <input type="text" pInputText formControlName="estado" />
          </div>
          <div class="field">
            <label>PAIS</label>
            <input type="text" pInputText formControlName="pais" />
          </div>
        </div>

        <div>
          <div class="grid grid-nogutter justify-content-end mt-5">
            <p-button
              routerLink="/checkout/pagamento"
              label="Next"
              icon="pi pi-angle-right"
              iconPos="right"
              type="submit"></p-button>
          </div>
        </div>
      </form>
    </p-card>
  </div>`,
})
export class DeliveryComponent {
  public cadastroForm = new FormGroup({
    logradouro: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    numero: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    cep: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    complemento: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    referencia: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    bairro: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    cidade: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    estado: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    pais: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });
  public onSubmit(): void {
    this.cadastroForm;
  }
}
