import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-SignUpPage',
  templateUrl: './SignUpPage.component.html',
  styleUrls: ['./SignUpPage.component.css']
})
export class SignUpPageComponent implements OnInit {
  signUpForm!: FormGroup;
  isSignUpFailed: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      const { email, password } = this.signUpForm.value;
      this.authService.register({ email, password, confirmPassword: this.signUpForm.value.confirmPassword }).subscribe(
        response => {
          // Handle successful registration, e.g., navigate to login page
          this.router.navigate(['/homepage']);
        },
        error => {
          this.isSignUpFailed = true;
          this.errorMessage = 'Registration failed. Please try again.';
          console.error('Registration failed', error);
        }
      );
    }
  }

  navigateToLoginPage(): void {
    this.router.navigate(['/login']);
  }
}
