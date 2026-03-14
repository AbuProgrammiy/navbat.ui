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

  private menuBarNames = {
    main: 'Asosiy',
    queues: 'Navbatim',
    profil: 'Profil',
  };

  protected items = signal<MenuBarItem[]>([
    {
      label: this.menuBarNames.main,
      path: '',
      icon: 'pi pi-home',
    },
    {
      label: this.menuBarNames.queues,
      path: 'queues',
      icon: 'pi pi-list',
    },
    {
      label: this.menuBarNames.profil,
      path: 'profile',
      icon: 'pi pi-user',
    },
  ]);

  ngOnInit() {
    const currentPath = window.location.pathname;
    console.log(currentPath);

    switch (currentPath) {
      case '/':
        this.activeItem.set(this.menuBarNames.main);
        break;
      case '/queues':
        this.activeItem.set(this.menuBarNames.queues);
        break;
    }
  }
}

export interface MenuBarItem {
  label?: string;
  path?: string;
  icon?: string;
}
