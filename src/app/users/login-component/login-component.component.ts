import { Component, OnInit } from '@angular/core';
import { FlaskdemoService } from '../../flaskdemo.service';
//import { AuthService } from "../../shared/services/auth.service";
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  durationInSeconds = 5;
  constructor( private flaskdemoService :  FlaskdemoService , private router : Router) { }
 
  //constructor( public authService: AuthService , private router : Router) { }
 
  username!: String;
  password!: String;
/*
  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
  */
  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }

  login(username : String ,password :  String) : void {
    this.username = username;
    this.password = password;
    console.log(username+'---'+password);
    let message = this.flaskdemoService.login(username,password);
    this.router.navigate(['products/store'])
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: '/message.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}