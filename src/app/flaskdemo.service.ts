import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlaskdemoService {
  private flaskDemoUrl: String;
  private errors: any;
  constructor(private http: HttpClient) {
    this.flaskDemoUrl = 'https://flask-demo-11.nw.r.appspot.com/';
  }

  /* register (username : String,password : String): Observable<User> {
     return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
       tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
       catchError(this.handleError<Hero>('addHero'))
     );
   }
 
     console.log(username+' --in service-->'+password)
   }
 */
  register(username: String, password: String): any {
    /* const headers = { 'Content-Type': 'application/json'};
     const HTTP_OPTIONS = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json',
         'Access-Control-Allow-Credentials' : 'true',
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
         'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
       })
     };
 
     const body = { usernam:username , password:password };
     this.http.post<any>('https://flask-demo-11.nw.r.appspot.com/register/', body,  HTTP_OPTIONS ).subscribe(data => {
         //this.postId = data.id;
         console.log(' --in service responce -->'+data);
     });
 */


    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { username: username, password: password };
    this.http.post('https://store-api-dev.nw.r.appspot.com/register', body, { headers: headers })
      .subscribe(
        result => {
          // Handle result
          console.log(result)
        },
        error => {
          this.errors = error;
        },
        () => {
          // 'onCompleted' callback.
          // No errors, route to new page here
        }
      );

  }
  async login(username: String, password: String) {
    try {
      let headers = new HttpHeaders().set('Content-Type', 'application/json');

      const body = { username: username, password: password };
      this.http.post<any>('https://store-api-dev.nw.r.appspot.com/login', body, { headers: headers }).subscribe(

        result => {
          // Handle result
          console.log(result)
        },
        error => {
          this.errors = error;
        },
        () => {
          // 'onCompleted' callback.
          // No errors, route to new page here
        }
      );

    } catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
    }

  }
}


