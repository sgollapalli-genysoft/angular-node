import { Component } from '@angular/core';
import { userApi } from '../shared/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private userapi: userApi, private router: Router) { }

  // Handle the login form submission
  onSubmit() {
    const credentials = { email: this.email, password: this.password };
    
    this.userapi.login(credentials).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);  // Store JWT token in localStorage
        this.successMessage = 'Login successful!';
        this.router.navigate(['/dashboard']);  // Redirect to dashboard or home page
      },
      (error) => {
        this.errorMessage = 'Login failed: ' + error.error.message;
      }
    );
  }

}
