import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Socket } from '../_models/socket';

@Injectable({
  providedIn: 'root'
})
export class SocketService 
{
  url = 'http://localhost:8081/socket';

  constructor(private http : HttpClient) { }

  All() : Observable<Socket[]>
  {
    return this.http.get<Socket[]>(this.url + '/all');
  }

  Get(id) : Observable<Socket>
  {
    return this.http.get<Socket>(this.url + '/get?id=' + id);
  }
}
