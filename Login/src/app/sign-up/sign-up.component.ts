import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  standalone : true,
  imports: [  ReactiveFormsModule ,],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {


  signup! : FormGroup;


  constructor ( private fb : FormBuilder , private router : Router ) {}
   ngOnInit(){
     
    this.signup = this.fb.group({
      name : ['' , [Validators.required, Validators.minLength(3)]],
      age : ['' , [Validators.required, Validators.min(18)]],
      phone : ['' , [Validators.required, Validators.pattern('[0-9]{10,}$')]],
      username : [ '' , [Validators.required , Validators.minLength(3)]],
      password : [ '' , [Validators.required, Validators.maxLength(8)]],
    })

   }
   onsubmit(){ 
      if(this.signup.valid) {
         const Userdata = this.signup.value
         localStorage.setItem("userdata" , JSON.stringify(Userdata))
        //  alert('Sign Up done Successfully')
         this.router.navigate(['/Login'])
      }
    }



}
