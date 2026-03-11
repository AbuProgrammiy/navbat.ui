import { Component, signal } from '@angular/core';
import { ServiceBar } from "./components/service-bar/service-bar";

@Component({
  selector: 'app-queues',
  imports: [ServiceBar],
  templateUrl: './queues.html',
  styleUrl: './queues.scss',
})
export class Queues {
  protected showQueues = signal(true);
}
