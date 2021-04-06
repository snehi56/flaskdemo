import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MyMaterialModule } from  './material.module';
import { MatCarouselModule } from '@ngbmodule/material-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
//import { AuthService } from "./shared/services/auth.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MyMaterialModule,
    HttpClientModule,
    MatCarouselModule.forRoot(),
    //HttpClientInMemoryWebApiModule.forRoot(
      //InMemoryDataService, { dataEncapsulation: false }
   ///// )/////,
    RouterModule.forRoot([
      { path: '', redirectTo: '', pathMatch: 'full' }
     ]),
 
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
