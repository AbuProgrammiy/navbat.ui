import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root',
})
export class QueueService extends ApiService {
  public getQueues() {
    return of();
  }
}

export interface Queue {
  id: number;
  name: string;
  serviceId: number;
  waitingCount: number;
}