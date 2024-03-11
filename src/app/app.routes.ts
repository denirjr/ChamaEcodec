import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'product',
    loadChildren: () =>
      import('./products/products.routes').then((mod) => mod.product),
  },
];
