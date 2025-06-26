import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AuthService } from '../../shared/Services/auth/auth.service';
import { MatCard, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FeedbackService } from '../../shared/feedback/feedback.service';
@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  form;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private feedback:FeedbackService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }


  submit() {
    if (this.form.invalid) return;
    this.auth.login(this.form.value).subscribe({
      next: () => this.router.navigate(['/']),
       error: (err) => {
         this.feedback.error(err?.error?.message || 'Login Failed')
      },
    });
  }

}
