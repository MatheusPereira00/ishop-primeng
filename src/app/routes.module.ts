import { Routes } from '@angular/router';

import { ProductsDetailComponent } from './components/features/products/products-detail/products-detail.component';
import { CartComponent } from './components/features/cart/cart.component';

import { StepsComponent } from './components/features/payment/steps/steps.component';
import { PersonalComponent } from './components/features/payment/personal/personal.component';
import { DeliveryComponent } from './components/features/payment/delivery/delivery.component';
import { PaymentComponent } from './components/features/payment/payment/payment.component';
import { ConfirmationComponent } from './components/features/payment/confirmation/confirmation.component';

import { HomeComponent } from './components/features/adm/home-adm/home.component';

import { CreateAccountComponent } from './components/features/account/create-account/create-account.component';
import { LoginComponent } from './components/features/account/login/login.component';

import { ListCateSubcateComponent } from './components/features/adm/list-cate-subcate/list-cate-subcate.component';
import { AddEditSubComponent } from './components/features/adm/add-edit-sub/add-edit-sub.component';
import { AddEditCateComponent } from './components/features/adm/add-edit-cate/add-edit-cate.component';

import { ListProductsComponent } from './components/features/adm/list-products/list-products.component';
import { ProductsListComponent } from './components/features/products/products-list/products-list.component';
import { AdmGuard } from './data-acess/guards/adm.guard';

export const productsRoutes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent,
  },
  {
    path: 'details/:id',
    component: ProductsDetailComponent,
  },
];

export const cartRoutes: Routes = [
  {
    path: 'products/cart',
    component: CartComponent,
  },
];

export const checkoutRoutes: Routes = [
  {
    path: '',
    component: StepsComponent,
    children: [
      {
        path: 'pessoais',
        component: PersonalComponent,
      },
      {
        path: 'envio',
        component: DeliveryComponent,
      },
      {
        path: 'pagamento',
        component: PaymentComponent,
      },
      {
        path: 'confirmacao',
        component: ConfirmationComponent,
      },
    ],
  },
];

export const accountRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'create-account',
    component: CreateAccountComponent,
  },
];

export const admRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AdmGuard],
  },
  {
    path: 'list-categories-subcategories',
    component: ListCateSubcateComponent,
  },
  {
    path: 'list-categories-subcategories/add',
    component: AddEditCateComponent,
  },
  {
    path: 'list-categories-subcategories/edit/:id',
    component: AddEditCateComponent,
  },
  {
    path: 'list-categories-subcategories/subcategories/add',
    component: AddEditSubComponent,
  },
  {
    path: 'list-categories-subcategories/subcategories/:id',
    component: AddEditSubComponent,
  },
  {
    path: 'list-products',
    component: ListProductsComponent,
  },
];
