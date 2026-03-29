import { Component, input, model } from '@angular/core';
import { Button } from 'primeng/button';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-location-dialog',
  imports: [
    Dialog,
    Button
  ],
  templateUrl: './location-dialog.html',
  styleUrl: './location-dialog.scss',
})
export class LocationDialog {
  public isVisible = model<boolean>(false);
}
