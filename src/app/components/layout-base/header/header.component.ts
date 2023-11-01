import { SidenavConfigComponent } from './../sidenav-config/sidenav-config.component';
import { Component, inject } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MenubarModule } from 'primeng/menubar';
import { RouterLink } from '@angular/router';
import { SearchBarComponent } from '../../../shared/search-bar/search-bar.component';
import { BadgeModule } from 'primeng/badge';
import { AuthService } from 'src/app/data-acess/services/auth-service/auth.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { CarouselComponent } from '../../../shared/carousel/carousel.component';

@Component({
  selector: 'app-header',
  template: ` <p-toolbar>
    <div class="p-toolbar-group-start gap-3 ml-2">
      <h1 routerLink="/" style="color: var(--primary-color)">matheus SHOP</h1>
      <app-sidenav />
    </div>
    <div>
      <app-search-bar />
    </div>
    <div class="p-toolbar-group-end gap-5 margin-right: 2" style="margin-right: 5rem">
      <i
        pBadge
        value="0"
        routerLink="/products/cart"
        class="pi pi-cart-plus"
        style="font-size: 2rem; color: var(--primary-color); margin-right: 2"></i>
      <i
        class="pi pi-user"
        style="font-size: 2rem; color: var(--primary-color)"
        routerLink="account"></i>

      <ng-container *ngIf="isLoggedIn$ | async">
        <ng-container *ngIf="isAdmin$ | async; else isRegular">
          <p routerLink="adm-home">Ola admin</p>
        </ng-container>
        <ng-template #isRegular>
          <p>Ola Usuário</p>
        </ng-template>
      </ng-container>
      <app-sidenav-config />

      <p-dialog header="Header" [(visible)]="visible" [style]="{ width: '50vw' }">
        <app-carousel />
      </p-dialog>

      <p-button (onClick)="showDialog()">Descontos</p-button>
    </div>
  </p-toolbar>`,
  standalone: true,
  imports: [
    SidenavComponent,
    PanelModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    InputSwitchModule,
    MenubarModule,
    RouterLink,
    SearchBarComponent,
    BadgeModule,
    SidenavConfigComponent,
    NgIf,
    AsyncPipe,
    DialogModule,
    CarouselComponent,
  ],
})
export class HeaderComponent {
  private _authService = inject(AuthService);

  public isLoggedIn$ = this._authService.isLoggedIn$;
  public isAdmin$ = this._authService.isAdmin$;

  public visible = false;

  public showDialog(): void {
    this.visible = true;
  }
}
