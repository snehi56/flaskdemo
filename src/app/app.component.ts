import { Component } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';
import { Router } from '@angular/router';
import { FlaskdemoService } from './flaskdemo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flaskdemo';
  currentUser: any;

  constructor(
    private router: Router,
    private flaskdemoService :  FlaskdemoService
  ){
    if (localStorage.getItem("currentUser") != null) {
      this.currentUser = localStorage.getItem("currentUser");
    }else{
      this.currentUser = null;
    }
    console.log('--> '+this.currentUser);
  }
 
  
  logout() {
    console.log('in Logout');
    this.flaskdemoService.logout();
    console.log(localStorage.getItem("currentUser"))
    this.router.navigate(['users/login']);
}
   /// slides = [{'image': 'assets/images//banner-01.jpg'}, {'image': 'assets/images//banner-02.jpg'},{'image': 'assets/images//banner-03.jpg'}];
}
