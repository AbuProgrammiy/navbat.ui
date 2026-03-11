import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-queues',
  imports: [],
  templateUrl: './queues.html',
  styleUrl: './queues.scss',
})
export class Queues {
  protected showQueues = signal(false);
}
