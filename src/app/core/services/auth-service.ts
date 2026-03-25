import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../../shared/models/responde.model';
import { ApiService } from './api-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiService {
  private ACCESS_TOKEN_KEY = 'accessToken';
  public getAccessToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY);
  }

  public setAccessToken(token: string): void {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, token);
  }

  public sendVerificationCode(phoneNumber: string): Observable<ResponseModel> {
    const url = `${this.baseUrl}/${this.authUrl}/send-code`;
    return this.httpClient.post<ResponseModel>(url, { phoneNumber });
  }

  public verifyVerificationCode(request: VerificationRequest): Observable<ResponseModel> {
    const url = `${this.baseUrl}/${this.authUrl}/verify-code`;
    return this.httpClient.post<ResponseModel>(url, request);
  }
}

export interface VerificationRequest {
  phoneNumber: string;
  code: number;
}