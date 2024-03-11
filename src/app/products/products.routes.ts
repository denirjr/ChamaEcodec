import { Routes } from '@angular/router';

export const product: Routes = [
  {
    path: 'list',
    loadComponent: () =>
      import('./list/list.component').then((mod) => mod.ListComponent),
  },
  {
    path: 'item',
    loadComponent: () =>
      import('./item/item.component').then((mod) => mod.ItemComponent),
  },
];
