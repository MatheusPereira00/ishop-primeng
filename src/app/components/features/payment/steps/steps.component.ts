import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { MenuItem, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { StepsModule } from 'primeng/steps';

@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [CommonModule, ToastModule, StepsModule],
  template: `<div class="mt-8">
      <p-toast></p-toast>
      <p-steps [model]="items" [readonly]="false"></p-steps>
    </div>
    <router-outlet></router-outlet> `,
  providers: [MessageService],
})
export class StepsComponent implements OnInit, OnDestroy {
  public items!: MenuItem[];

  public subscription!: Subscription;

  public messageService = inject(MessageService);

  public ngOnInit(): void {
    this.items = [
      {
        label: 'Informações pessoais',
        routerLink: 'pessoais',
      },
      {
        label: 'Informações envio',
        routerLink: 'envio',
      },
      {
        label: 'Informações pagamento',
        routerLink: 'pagamento',
      },
      {
        label: 'confirmacao',
        routerLink: 'confirmacao',
      },
    ];
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
