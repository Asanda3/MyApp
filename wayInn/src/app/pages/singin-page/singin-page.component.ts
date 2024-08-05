import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-singin-page',
  templateUrl: './singin-page.component.html',
  styleUrls: ['./singin-page.component.scss']
})
export class SinginPageComponent {
  loginForm!: FormGroup;
  isLoginFailed: boolean = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login({ email, password }).subscribe(
        response => {
          this.authService.saveToken(response.token);
          this.router.navigate(['/homepage']);
        },
        error => {
          this.isLoginFailed = true;
          this.errorMessage = 'Login failed. Please try again.';
          console.error('Login failed', error);
        }
      );
    }
  }
  

  navigateToSignUpPage(): void {
    this.router.navigate(['/signUpPage']);
  }

  navigateToHomepage(): void {
    this.router.navigate(['/homepage']);
  }
}