import { Routes } from '@angular/router';
import { Home } from './feature/home/home';
import { Queues } from './feature/queues/queues';
import { MainLayout } from './layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'queues',
        component: Queues,
      }
    ],
  },
];
