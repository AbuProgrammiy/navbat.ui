import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBar } from "../../shared/components/menu-bar/menu-bar";

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    MenuBar
],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
