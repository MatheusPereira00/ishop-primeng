import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./routes.module').then(m => m.productsRoutes),
  },
  {
    path: '',
    loadChildren: () => import('./routes.module').then(m => m.cartRoutes),
  },
  {
    path: 'checkout',
    loadChildren: () => import('./routes.module').then(m => m.checkoutRoutes),
  },

  {
    path: 'account',
    loadChildren: () => import('./routes.module').then(m => m.accountRoutes),
  },
  {
    path: 'adm-home',
    loadChildren: () => import('./routes.module').then(m => m.admRoutes),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
