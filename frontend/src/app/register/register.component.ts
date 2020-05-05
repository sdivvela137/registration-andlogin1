import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{


  constructor(private userService:UserService){}
  register;

  ngOnInit(){
    this.register = {
      username:'',
      email:'',
      password:'',
      
    };
  }
  RegisterUser() {
    this.userService.registerNewUser(this.register).subscribe(
      response =>{
        alert('User '+ this.register.username + 'has been created')
      },
      error=>{ alert( "username has already been created. Choose other username")
    },
    );
  }
    } 
  