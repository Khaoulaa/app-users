import { Injectable } from '@angular/core';
import { HttpHeaders , HttpClient , HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions ;
  
  constructor(private http: HttpClient) { 
     this.httpOptions = {
      headers: new HttpHeaders({
         'Content-Type':  'application/json'
      })
     };
  }
  getUsers(nbr)
  {

    return this.http.get<any>(`${environment.api}/users` , {headers : this.httpOptions})
  }
  getUserByLogin(login)
  {
    return this.http.get<any>(`${environment.api}/users/${login}` , {headers : this.httpOptions})
  }
 serachProfile(word)
 {
   console.log('word ::' , word);
   return this.http.get<any>(`${environment.api}/search/users?q=${word}` , {headers : this.httpOptions})

    
 
 }
}
