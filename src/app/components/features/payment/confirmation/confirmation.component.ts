import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, CardModule],
  template: `<div class="m-8">
    <p-card>
      <div>
        <h1>PAGAMENTO EFETUADO COM SUCESSO</h1>
        <p>COMPRA EFETUADA COM SUCESSO</p>
      </div>
    </p-card>
  </div> `,
})
export class ConfirmationComponent {}
