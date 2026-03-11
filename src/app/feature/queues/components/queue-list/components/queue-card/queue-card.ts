import { Component, input } from '@angular/core';

@Component({
  selector: 'app-queue-card',
  imports: [],
  templateUrl: './queue-card.html',
  styleUrl: './queue-card.scss',
})
export class QueueCard {
  public isCurrentUser = input<boolean>();
}
