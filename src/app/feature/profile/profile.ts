import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-profile',
  imports: [InputTextModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly confirmationService = inject(ConfirmationService);
  protected isEditing = signal<boolean>(false);

  protected profileForm = this.fb.group({
    firstName: this.fb.control<string | null>(null, Validators.required),
    lastName: this.fb.control<string | null>(null, Validators.required),
    age: this.fb.control<string | null>(null, Validators.required),
    phoneNumber: this.fb.control<string | null>(null, Validators.required),
    email: this.fb.control<string | null>(null, Validators.email),
  });

  ngOnInit(): void {
    this.profileForm.disable();
  }

  protected logOut() {
    this.confirmationService.confirm({
      message: 'Siz Akkauntni tark etmoqchimisiz?',
      accept: () => {
        localStorage.clear();
        this.router.navigate(['sign-in-up']);
      },
      reject: () => {
      }
    });
  }

  protected toggleEdit() {
    this.isEditing.set(!this.isEditing());

    if (this.isEditing()) {
      this.profileForm.enable();
    } else {
      this.profileForm.disable();
    }
  }
}
