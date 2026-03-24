import { Routes } from '@angular/router';
import { SignInUp } from './auth/sign-in-up/sign-in-up';
import { Home } from './feature/home/home';
import { Profile } from './feature/profile/profile';
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
      },
      {
        path: 'profile',
        component: Profile,
      },
      {
        path: 'sign-in-up',
        component: SignInUp,
      }
    ],
  },
];
