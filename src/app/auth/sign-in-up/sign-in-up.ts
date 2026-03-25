import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Button } from "primeng/button";
import { InputMask } from 'primeng/inputmask';
import { InputOtp } from 'primeng/inputotp';
import { finalize } from 'rxjs';
import { AuthService } from '../../core/services/auth-service';
import { ResponseModel } from '../../shared/models/responde.model';

@Component({
  selector: 'app-sign-in-up',
  imports: [
    InputMask,
    FormsModule,
    Button,
    InputOtp
  ],
  templateUrl: './sign-in-up.html',
  styleUrl: './sign-in-up.scss',
})
export class SignInUp {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  protected phoneNumber = signal<string | null>(null);
  protected verificationCode = signal<number | null>(null);
  protected isLoading = signal<boolean>(false);

  protected mode = signal<'send-code' | 'verify-code' | 'update-data'>('send-code');

  protected sendVerificationCode() {
    this.isLoading.set(true);
    const phoneNumber = this.phoneNumber();

    if (!phoneNumber) return;

    this.authService.sendVerificationCode(phoneNumber)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.isLoading.set(false);
        })
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          this.mode.set('verify-code');
          this.authService.showSuccess(response.message);
        },
        error: (err: ResponseModel) => {
          this.authService.showError(err.message);
        },
      });
  }
  protected verifyCode() {
    this.isLoading.set(true);
    const phoneNumber = this.phoneNumber();
    const verificationCode = this.verificationCode();

    if (!(phoneNumber && verificationCode)) return;

    this.authService.verifyVerificationCode({
      phoneNumber,
      code: verificationCode
    })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        finalize(() => {
          this.isLoading.set(false);
        })
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          localStorage.setItem('accessToken', response.data as string);
          this.mode.set('verify-code');
          this.authService.showSuccess('Muvafaqiyattli kirdingiz');
          this.router.navigate(['']);
        },
        error: (err: ResponseModel) => {
          this.authService.showError(err.message);
        },
      });
  }
}
