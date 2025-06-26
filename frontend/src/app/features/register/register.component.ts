import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../shared/Services/auth/auth.service';
import { FeedbackService } from '../../shared/feedback/feedback.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientTestingModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: ReturnType<FormBuilder['group']>;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private feedback: FeedbackService
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submit() {
    if (this.form.invalid) return;

    this.auth.register(this.form.value).subscribe({
      next: () => {
        this.feedback.success('Registered successfully!');
        this.router.navigate(['/auth/login']);
      },
      error: err => {
        const msg = err?.error?.message || 'Registration failed';
        this.feedback.error(msg);
      }
    });
  }

}
