import { Component, OnInit } from '@angular/core';
import { FlaskdemoService } from '../../flaskdemo.service';
@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.scss']
})
export class RegistrationComponentComponent implements OnInit {

  constructor( private flaskdemoService :  FlaskdemoService) { }
  //constructor (){}
  username!: String;
  password!: String;

  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }

  register(username : String ,password :  String) : void {
    this.username = username;
    this.password = password;
    console.log(username+'---'+password);
    this.flaskdemoService.register(username,password);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    /*.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
    */
   }

}
