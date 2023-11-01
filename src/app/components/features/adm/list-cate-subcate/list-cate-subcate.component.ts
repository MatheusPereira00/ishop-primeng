import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSubcateComponent } from './list-subcate/list-subcate.component';
import { ListCateComponent } from './list-cate/list-cate.component';

@Component({
  selector: 'app-list-cate-subcate',
  standalone: true,
  template: `
    <div Class="m-8">
      <div class="mb-8">
        <app-list-cate />
      </div>

      <div>
        <app-list-subcate />
      </div>
    </div>
  `,
  imports: [CommonModule, ListSubcateComponent, ListCateComponent],
})
export class ListCateSubcateComponent {}
