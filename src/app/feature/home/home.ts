import { Component, OnInit } from '@angular/core';
import { FilterBar } from "./components/filter-bar/filter-bar";

@Component({
  selector: 'app-home',
  imports: [FilterBar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  test: any = null;
  ngOnInit(): void {
    this.test = 'hech nima yoq';
  }
}
