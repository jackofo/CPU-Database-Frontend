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

  Get(id) : Observable<Cpu>
  {
    return this.http.get<Cpu>(this.url + '/get?id=' + id);
  }

  Add(cpu) : Observable<string>
  {
    const httpOptions = 
    {
      headers: new HttpHeaders({"Content-Type": "application/json"})
    }

    return this.http.post<string>(this.url + '/add', cpu, httpOptions);
  }

  Delete(id) : Observable<string>
  {
    return this.http.get<string>(this.url + '/delete?id=' + id);
  }
}
