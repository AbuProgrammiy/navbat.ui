import { Component } from '@angular/core';
import { QueueCard } from "./components/queue-card/queue-card";

@Component({
  selector: 'app-queue-list',
  imports: [QueueCard],
  templateUrl: './queue-list.html',
  styleUrl: './queue-list.scss',
})
export class QueueList {

}
