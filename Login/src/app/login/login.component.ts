import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm! : FormGroup

  constructor ( public fb : FormBuilder, private router : Router ) {}
    ngOnInit(){

      this.loginForm = this.fb.group({
        username : ["" , [Validators.required]],
        password : ["" , [Validators.required]]
      }
      )
    }


    logindata() {
      if(this.loginForm.valid) {
        const LoginUser = this.loginForm.value
        const userData = JSON.parse(localStorage.getItem('userdata') || '{}')

if(userData.username === LoginUser.username && userData.password=== LoginUser.password){
  this.router.navigate(['/Home'])
}
else{
  alert("Invalid Creditials")
}
      }
    }
  }