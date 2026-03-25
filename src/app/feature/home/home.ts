import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FilterBar } from "./components/filter-bar/filter-bar";

@Component({
  selector: 'app-home',
  imports: [FilterBar, NgClass],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected isFilterCollapsed = signal<boolean>(false);
}
