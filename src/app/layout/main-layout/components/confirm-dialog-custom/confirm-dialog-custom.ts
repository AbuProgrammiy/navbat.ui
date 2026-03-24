import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { ConfirmDialog } from 'primeng/confirmdialog';

@Component({
  selector: 'app-confirm-dialog-custom',
  imports: [
    ConfirmDialog,
    Button
  ],
  templateUrl: './confirm-dialog-custom.html',
  styleUrl: './confirm-dialog-custom.scss',
})
export class ConfirmDialogCustom {

}
