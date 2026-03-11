import { Component, signal } from '@angular/core';
import { QueueList } from "./components/queue-list/queue-list";
import { ServiceBar } from "./components/service-bar/service-bar";

@Component({
  selector: 'app-queues',
  imports: [ServiceBar, QueueList],
  templateUrl: './queues.html',
  styleUrl: './queues.scss',
})
export class Queues {
  protected showQueues = signal(true);
}
