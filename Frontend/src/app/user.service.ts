import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url='http://localhost:3000/'


  postData(user:User){
   return this.http.post<User>(`${this.url}register`,user);
  }
  
  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.url}login`, { username, password });
  }
 
  order(user:User):Observable<string> {
    return this.http.post<string>(`${this.url}placeorder`,user);
  }

  private loggedInUserSubject = new BehaviorSubject<string | null>(null);
  logged = this.loggedInUserSubject.asObservable();

  setLoggedInUser(username: string | null) {
    this.loggedInUserSubject.next(username);
    if(username!==null){
      localStorage.setItem('loggedInUser',username);
    }
    else {
      localStorage.removeItem('loggedInUser');
    }
  }
}


export { User };


