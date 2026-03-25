import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly messageService = inject(MessageService);
  protected readonly baseUrl: string = environment.baseUrl;
  protected readonly authUrl: string = 'api/Auth';
  protected readonly httpClient = inject(HttpClient);

  public showSuccess(
    detail?: string,
    summary?: string,
    severity?: string,
    life?: number
  ) {
    this.messageService.add({
      severity: severity ?? 'success',
      summary: summary ?? 'Bajarildi',
      detail: detail ?? 'Muvafaqiyatli bajarildi',
      life: life ?? 3000
    });
  }

  public showError(
    detail?: string,
    summary?: string,
    severity?: string,
    life?: number
  ) {
    this.messageService.add({
      severity: severity ?? 'error',
      summary: summary ?? 'Xato',
      detail: detail ?? 'Nimadir xato ketdi',
      life: life ?? 3000
    });
  }
}
