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
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    RouterLink,
  ],
  template: `<div class="m-8">
    <p-card>
      <form [formGroup]="cadastroForm" (ngSubmit)="onSubmit()">
        <div class="mb-6">
          <h1>INFORMAÇÕES PESSOAIS</h1>
          <p>PREENCHA O FORMULARIO</p>
        </div>
        <div class="p-fluid">
          <div class="field">
            <label for="firstname">NOME COMPLETO</label>
            <input pInputText formControlName="name" />
          </div>
          <div class="field">
            <label for="lastname">EMAIL</label>
            <input id="lastname" type="text" pInputText formControlName="email" />
          </div>
          <div class="field">
            <label>SENHA</label>
            <input id="age" type="text" pInputText formControlName="senha" />
          </div>
          <div class="field">
            <label>CONFIRMAR SENHA</label>
            <input id="age" type="text" pInputText formControlName="confirmarSenha" />
          </div>
          <div class="field">
            <label>CPF</label>
            <input id="cpf" type="number" pInputText formControlName="cpf" />
          </div>
          <div class="field">
            <label>RG</label>
            <input id="cpf" type="number" pInputText formControlName="rg" />
          </div>
          <div class="field">
            <label>DATA DE NASCIMENTO</label>
            <input id="cpf" type="date" pInputText formControlName="dataNascimento" />
          </div>
          <div class="field">
            <label>TELEFONE</label>
            <input id="cpf" type="number" pInputText formControlName="telefone" />
          </div>
        </div>

        <div>
          <div class="grid grid-nogutter justify-content-end mt-5">
            <p-button
              routerLink="/checkout/envio"
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
export class PersonalComponent {
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
