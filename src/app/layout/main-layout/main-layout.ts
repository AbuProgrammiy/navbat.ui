import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { MenuBar } from "../../shared/components/menu-bar/menu-bar";
import { Navbar } from "../../shared/components/navbar/navbar";
import { ConfirmDialogCustom } from "./components/confirm-dialog-custom/confirm-dialog-custom";

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    MenuBar,
    Navbar,
    ConfirmDialogCustom,
    Toast
  ],
  providers: [ConfirmationService],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout { }
