import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  imports: [],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.scss',
})
export class MenuBar {
  protected items = signal<AppMenuItems[]>([
    {
      name: 'Queue',
      path: '',
    },
  ]);
}

export interface AppMenuItems {
  name: string;
  path: string;
}
