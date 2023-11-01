import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CarouselComponent } from '../../../../shared/carousel/carousel.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/data-acess/services/auth-service/auth.service';
@Component({
  selector: 'app-home',
  standalone: true,
  template: `<div>
    <div Class="flex justify-content-center flex-wrap gap-3 mt-8" style="margin: auto">
      <div>
        <p-button
          icon="pi pi-check"
          styleClass="h-7rem w-60rem bg-primary"
          label="VER TODAS AS CATEGORIAS"
          [loading]="loadingCategorias"
          (onClick)="loadC()"></p-button>
      </div>
      <div>
        <p-button
          icon="pi pi-check"
          styleClass="h-7rem w-60rem  bg-primary"
          label="VER TODOS OS PRODUTOS"
          [loading]="loadingProdutos"
          (onClick)="loadP()"></p-button>
      </div>
      <div>
        <p-button
          icon="pi pi-check"
          styleClass="h-7rem w-60rem  bg-primary"
          label="VER TODOS OS MEMBROS"
          [loading]="loadingMembros"
          (onClick)="loadM()"></p-button>
      </div>
    </div>

    <div class="mt-8">
      <app-carousel />
    </div>

    <div class="flex justify-content-center flex-wrap mt-8">
      <p-button
        icon="pi pi-check"
        styleClass="h-7rem w-60rem bg-primary"
        label="VER TODOS OS PEDIDOS"
        [loading]="loadingTodosPedidos"
        (onClick)="loadT()"></p-button>
    </div>
  </div>`,
  imports: [CommonModule, ButtonModule, CarouselComponent],
})
export class HomeComponent {
  public loadingCategorias = false;
  public loadingProdutos = false;
  public loadingMembros = false;
  public loadingTodosPedidos = false;
  public usuarioAutenticado = false;

  public router = inject(Router);
  private _authService = inject(AuthService);

  public loadC(): void {
    this.loadingCategorias = true;

    setTimeout(() => {
      this.loadingCategorias = false;
      this.router.navigate(['/adm-home/list-categories-subcategories']);
    }, 2000);
  }

  public loadP(): void {
    this.loadingProdutos = true;

    setTimeout(() => {
      this.loadingProdutos = false;
      this.router.navigate(['/adm-home/list-products']);
    }, 2000);
  }
  public loadM(): void {
    this.loadingMembros = true;

    setTimeout(() => {
      this.loadingMembros = false;
    }, 2000);
  }
  public loadT(): void {
    this.loadingTodosPedidos = true;

    setTimeout(() => {
      this.loadingTodosPedidos = false;
    }, 2000);
  }
}
