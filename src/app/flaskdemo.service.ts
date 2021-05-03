import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError ,BehaviorSubject} from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

///import { StoreData } from './products/store/storedata' ; 


export interface StoreData {
  id: string;
  name: string;
  // items : any;
}
export class User {
 /* id: number;
  username: string;
  password: string;
  token: string;
*/}


@Injectable({
  providedIn: 'root'
})
export class FlaskdemoService {
  private flaskDemoUrl: String;
  private errors: any;

  //private currentUserSubject: BehaviorSubject<User>;
  //public currentUser: Observable<User>;


  constructor(private http: HttpClient) {
    this.flaskDemoUrl = 'https://flask-demo-11.nw.r.appspot.com/';
   // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    //this.currentUser = this.currentUserSubject.asObservable();
  }

  //public get currentUserValue(): User {
   // return this.currentUserSubject.value;
 // }

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

  addStore(storeName: String): any {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { name: storeName };
    this.http.post('https://store-api-dev.nw.r.appspot.com/store/'+storeName, body, { headers: headers })
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

  deleteStore(storeName: String){ 
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = { name: storeName };
    this.http.delete('https://store-api-dev.nw.r.appspot.com/store/'+storeName)
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
          console.log("access token--> "+JSON.stringify(result.access_token));
          localStorage.setItem('currentUser', JSON.stringify(result.access_token));
        //  this.currentUserSubject.next(result);
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
  
  
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    //this.currentUserSubject.next(null);
  }

  getAllStores(): Observable<StoreData[]> {
    //return this.http.get<StoreData[]>('https://store-api-dev.nw.r.appspot.com/stores');

    return this.http.get<any>('https://store-api-dev.nw.r.appspot.com/stores').pipe(
      map((data: any) => data.stores ), 
    catchError(error => { return throwError('There is some Error')})
);
  
  }

}


