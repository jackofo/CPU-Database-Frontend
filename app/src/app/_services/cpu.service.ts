import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Cpu, CpuShort } from '../_models/cpu';

@Injectable({
  providedIn: 'root'
})

export class CpuService 
{
  url = 'http://localhost:8081/cpu';

  constructor(private http : HttpClient) { }

  All() : Observable<CpuShort[]>
  {
    return this.http.get<CpuShort[]>(this.url + '/all');
  }

  Add(cpu) : Observable<string>
  {
    const httpOptions = 
    {
      headers: new HttpHeaders({"Content-Type": "application/json"})
    }

    return this.http.post<string>(this.url + '/add', cpu, httpOptions);
  }
}