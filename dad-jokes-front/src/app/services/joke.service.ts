import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Joke } from '../entitites/joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  headers:HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  baseUrl: string = "http://localhost:5023/dadjoke";
  constructor(private http:HttpClient) {

    
   }


   public GetRandomJoke():Observable<any>{
    var headers = this.headers;
    return this.http.get(`${this.baseUrl}/random`, {headers})
   }

   public GetJokeCount():Observable<any>{
    var headers = this.headers;
    return this.http.get(`${this.baseUrl}/count`, {headers})
   }
}
