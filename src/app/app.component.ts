import { Component } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngbmodule/material-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flaskdemo';
  slides = [{'image': 'assets/images//banner-01.jpg'}, {'image': 'assets/images//banner-02.jpg'},{'image': 'assets/images//banner-03.jpg'}];
}
