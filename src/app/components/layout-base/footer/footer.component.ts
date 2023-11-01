import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { TranslocoRootModule } from 'src/app/shared/transloco/transloco-root.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, ToolbarModule, TranslocoRootModule],
  template: `<ng-container *transloco="let transloco">
    <div class="fixed bottom-0 left-0" style="margin: auto; width: 100%">
      <div class="text-center p-3 bg-primary">
        <p>&copy;> {{ transloco('IbmShopFooter') }}</p>
      </div>
    </div>
  </ng-container>`,
})
export class FooterComponent {}
