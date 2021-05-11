import { Component } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';
import { Router } from '@angular/router';
import { FlaskdemoService } from './flaskdemo.service';
import { User } from './shared/services/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flaskdemo';
  currentUser!: User | null;

  constructor(
    private router: Router,
    private flaskdemoService :  FlaskdemoService
  ){
    this.flaskdemoService.currentUser.subscribe(x => this.currentUser = x);
    
    if (localStorage.getItem("currentUser") != null) {
      //this.currentUser = localStorage.getItem("currentUser");
      this.router.navigate(['products/store']);
    }else{
      this.currentUser = null;
      this.router.navigate(['users/login']);
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
