import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Button } from "primeng/button";
import { InputMask } from 'primeng/inputmask';
import { ResponseModel } from '../../shared/models/responde.model';
import { AuthService } from '../../shared/services/auth-service';

@Component({
  selector: 'app-sign-in-up',
  imports: [
    InputMask,
    FormsModule,
    Button
  ],
  templateUrl: './sign-in-up.html',
  styleUrl: './sign-in-up.scss',
})
export class SignInUp {
  private readonly authService = inject(AuthService);
  private readonly destroyRef = inject(DestroyRef);

  protected phoneNumber = signal<string | null>(null);
  protected isLoading = signal<boolean>(false);

  protected mode = signal<'send-code' | 'verify-code' | 'update-data'>('send-code');

  protected sendVerificationCode() {
    this.isLoading.set(true);
    const phoneNumber = this.phoneNumber();

    if (!phoneNumber) return;

    this.authService.sendVerificationCode(phoneNumber)
      .pipe(
        takeUntilDestroyed(this.destroyRef)
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
        complete: () => {
          this.isLoading.set(false);
        }
      });
  }
}
