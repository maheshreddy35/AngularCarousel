import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url="https://localhost:44382/api/Movieratings";
  constructor(private http:HttpClient) { }
  getmovies(){
    return this.http.get(this.url);
  }
}
