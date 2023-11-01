import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout-base/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/layout-base/footer/footer.component';
import { SidenavConfigComponent } from './components/layout-base/sidenav-config/sidenav-config.component';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  template: `
    <p-toast></p-toast>
    <app-header />

    <div class="mb-8">
      <router-outlet />
    </div>
    <app-footer />
  `,
  standalone: true,
  imports: [
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    FooterComponent,
    SidenavConfigComponent,
    ToastModule,
  ],
})
export class AppComponent {}
