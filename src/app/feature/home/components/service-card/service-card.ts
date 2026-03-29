import { Component, signal } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { Image } from 'primeng/image';
import { LocationDialog } from './components/location-dialog/location-dialog';

@Component({
  selector: 'app-service-card',
  imports: [Image, Dialog, LocationDialog],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
})
export class ServiceCard {
  protected isLocationDialogVisible = signal<boolean>(false);
}
