import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  constructor(private userService:UserService){}
  login;

  ngOnInit(){
    this.login = {
      username:'',
      password:'',
      
    };
  }
  
    LoginUser(){
      this.userService.LoginNewUser(this.login).subscribe(
        response =>{
          console.log(response);
          alert('User '+ this.login.username + 'has been created')
        },
        error=>{ alert( "could not login")
      },
      );
    }
      
    } 
  