import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControl, FormGroup, FormsModule} from '@angular/forms'
import { SignUpComponent } from "./sign-up/sign-up.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Login';


constructor (){
}
}
