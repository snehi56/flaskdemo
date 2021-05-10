import { NgModule , APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';

import { MyMaterialModule } from  './material.module';
import { MatCarouselModule } from '@ngbmodule/material-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
//import { JwtInterceptor, ErrorInterceptor, appInitializer } from './_helpers';

//import { AuthenticationService } from './_services';
//import { AuthService } from "./shared/services/auth.service";
// used to create fake backend
//import { fakeBackendProvider } from './_helpers';

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
  providers: [ 
    
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
