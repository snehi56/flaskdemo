import { NgModule } from '@angular/core';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MyMaterialModule } from  '../material.module';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { UsersRoutingModule } from './users-routing.module';
import { HomeComponent } from '../common/home/home.component';


@NgModule({
  declarations: [
    RegistrationComponentComponent,
    LoginComponentComponent,
    HomeComponent

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
  //  NoopAnimationsModule,
    MyMaterialModule,
    
    //HttpClientInMemoryWebApiModule.forRoot(
      //InMemoryDataService, { dataEncapsulation: false }
   ///// )/////,
    RouterModule.forChild([
    //  { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: RegistrationComponentComponent },
      { path: 'register', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
     ]),

  ]
})
export class UsersModule { }
