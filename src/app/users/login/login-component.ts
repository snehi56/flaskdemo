import { Component, OnInit } from '@angular/core';
import { FlaskdemoService } from '../../flaskdemo.service';
//import { AuthService } from "../../shared/services/auth.service";
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

//import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.html',
  styleUrls: ['./login-component.scss']
})
export class LoginComponent implements OnInit {
  durationInSeconds = 5;
  constructor( private flaskdemoService :  FlaskdemoService , private router : Router) { }
 
  //constructor( public authService: AuthService , private router : Router) { }
 
  username!: String;
  password!: String;

  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }

  login(username : string ,password :  string) : void {
    this.username = username;
    this.password = password;
    console.log(username+'---'+password);
    let message = this.flaskdemoService.login(username,password);
    this.router.navigate(['products/store']);
    console.log('sending to products');
  }
}
