import { Routes } from '@angular/router';
import { ListComponent } from '../../src/app/products/list/list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    loadComponent: () =>
      import('../../src/app/products/list/list.component').then(
        (comp) => comp.ListComponent
      ),
  },
  {
    path: 'item/:id',
    loadComponent: () =>
      import('../../src/app/products/item/item.component').then(
        (comp) => comp.ItemComponent
      ),
  },
];
