import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

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
      label: 'Home',
      path: '',
      icon: 'pi pi-home',
    },
    {
      label: 'Queues',
      path: '',
      icon: 'pi pi-list',
    },
    {
      label: 'Profile',
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
