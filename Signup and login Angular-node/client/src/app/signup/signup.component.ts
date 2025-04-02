import { Component } from '@angular/core';
import { userApi } from '../shared/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private userapi: userApi    , private router: Router) { }

  // Handle the signup form submission
  onSubmit() {
    const user = { username: this.username, email: this.email, password: this.password };
    
    this.userapi.signUp(user).subscribe(
      (response) => {
        this.successMessage = 'User created successfully!';
        this.router.navigate(['/login']); // Redirect to login page after successful signup
      },
      (error) => {
        this.errorMessage = 'Signup failed: ' + error.error.message;
      }
    );

}

}
