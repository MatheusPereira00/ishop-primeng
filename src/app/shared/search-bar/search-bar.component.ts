import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, InputTextModule],
  template: `<div class="p-input-icon-left">
    <input
      pInputText
      type="text"
      style="width: 25rem; border-radius: 1rem; border-color: var(--grey-light-color-5)" />
    <i class="pi pi-search"></i>
  </div> `,
})
export class SearchBarComponent {}
