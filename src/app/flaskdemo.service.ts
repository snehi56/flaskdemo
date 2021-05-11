import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError ,BehaviorSubject} from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
//import { StoreData } from './products/store/storedata' ; 
import { User } from './shared/services/user' ; 

export interface StoreData {
  id: string;
  name: string;
  // items : any;
}

@Injectable({
  providedIn: 'root'
})
export class FlaskdemoService {
  private flaskDemoUrl: String;
  private errors: any;

  private currentUserSubject: BehaviorSubject<User> ;
  
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.flaskDemoUrl = 'https://flask-demo-11.nw.r.appspot.com/';
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

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

  addProducts(productName: String,price:Number,store_id : Number): any {
    let headers = new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem("currentUser"));

    const body = { 'price': price , 'store_id' :  store_id};
    this.http.post('https://store-api-dev.nw.r.appspot.com/items/'+productName, body, {  
              headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': 'Bearer '+localStorage.getItem("currentUser")
              })  
        })
      .subscribe(
        result => {
          // Handle result
          console.log(result);
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

  deleteProduct(productName: String){ 
    let headers = new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem("currentUser"));
    const body = { name: productName };
    this.http.delete('https://store-api-dev.nw.r.appspot.com/item/'+productName,{ headers: headers })
      .subscribe(
        result => {
          // Handle result
          console.log(result);
          return result;
        },
        error => {
          console.log(error);
          this.errors = error;
        },
        () => {
          
        }
      );
  }


  async login(username: String, password: String) {
    try {
      let headers = new HttpHeaders().set('Content-Type', 'application/json');

      const body = { username: username, password: password };
      this.http.post<any>('https://store-api-dev.nw.r.appspot.com/login', body, { headers: headers }).subscribe(
      /*
        result => {
          // Handle result
          console.log("access token--> "+result.access_token);
          localStorage.setItem('currentUser', JSON.stringify(result.access_token));
          this.currentUserSubject.next(result);
*/
          user => {
            // login successful if there's a jwt token in the response
            if (user && user.access_token) {
              console.log(user.access_token);
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user.access_token));
              localStorage.setItem('refreshToken', user.access_token);
              this.currentUserSubject.next(user);
            }
  
            return user;
          //}


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
  //this.currentUserSubject = new BehaviorSubject<User>;

  
  }

  getAllStores():  Observable<StoreData[]>{
        return this.http.get<any>('https://store-api-dev.nw.r.appspot.com/stores').pipe(
      map((data: any) => data.stores ), 
    catchError(error => { return throwError('There is some Error')}));
  
  }

  getAllProducts(): Observable<any[]> {
    let headers = new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem("refreshToken"));
    console.log('Bearer '+localStorage.getItem("refreshToken"));
    
    return this.http.get(<any>'https://store-api-dev.nw.r.appspot.com/items', { headers: headers }).pipe(
                    map((data: any) => data.items ), 
    catchError(error => { return throwError('There is some Error')}));
  }
}


