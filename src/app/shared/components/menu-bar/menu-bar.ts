import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  imports: [RouterLink],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.scss',
})
export class MenuBar implements OnInit {
  private readonly router = inject(Router);

  protected activeItem = signal<string>('');

  protected items = signal<MenuBarItem[]>([
    {
      label: 'Asosiy',
      path: '',
      icon: 'pi pi-home',
    },
    {
      label: 'Navbatim',
      path: 'queues',
      icon: 'pi pi-list',
    },
    {
      label: 'Profil',
      path: '',
      icon: 'pi pi-user',
    },
  ]);

  ngOnInit() {
    const currentPath = window.location.pathname;
    console.log(currentPath);


    switch (currentPath) {
      case '/':
        this.activeItem.set('Home');
        break;
      case '/queues':
        this.activeItem.set('Queues');
        break;
    }
  }
}

export interface MenuBarItem {
  label?: string;
  path?: string;
  icon?: string;
}
