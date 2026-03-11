import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBar } from "../../shared/components/menu-bar/menu-bar";
import { Navbar } from "../../shared/components/navbar/navbar";

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    MenuBar,
    Navbar
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout { }
