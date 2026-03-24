import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Button } from "primeng/button";
import { FloatLabel } from 'primeng/floatlabel';
import { InputMask } from 'primeng/inputmask';
import { InputText } from 'primeng/inputtext';
import { ResponseModel } from '../../shared/models/responde.model';
import { AuthService } from '../../shared/services/auth-service';

@Component({
  selector: 'app-sign-in-up',
  imports: [
    FloatLabel,
    InputText,
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

  protected sendVerificationCode() {
    const phoneNumber = this.phoneNumber();

    if (!phoneNumber) return;

    this.authService.sendVerificationCode(phoneNumber)
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (response) => {
          console.log(response);
          this.authService.showSuccess(response.message);
        },
        error: (err: ResponseModel) => {
          this.authService.showError(err.message);
        }
      });
  }
}
