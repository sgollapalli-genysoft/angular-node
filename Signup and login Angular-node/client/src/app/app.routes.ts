import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {path : "usersignup" , component : SignupComponent},
    {path : "userlogin" , component : LoginComponent},
    {path : 'dashboard' , component : DashboardComponent},
    {path : '' , redirectTo : "/usersignup" , pathMatch : 'full'}
];
