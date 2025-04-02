
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Shared/api.service';
import { error } from 'console';
import { HttpRequest, HttpResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  recipes : any[] = [];

  constructor ( public apicalling : ApiService) { }


  ngOnInit(){
 
    this.apicalling.getData().subscribe({
      next : (response : any) => {
        console.log("data" , response)
        this.recipes = response.recipes
      },
      error : (error : any) => {
        console.log("Error" , error)
      },
      complete : ()=>{
        console.log("completed")
      }
    })



  }
}
