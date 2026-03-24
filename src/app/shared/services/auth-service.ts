import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responde.model';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService {
  public sendVerificationCode(phoneNumber: string): Observable<ResponseModel> {
    const url = `${this.baseUrl}/${this.authUrl}/send-code`;
    return this.httpClient.post<ResponseModel>(url, { phoneNumber });
  }
}
