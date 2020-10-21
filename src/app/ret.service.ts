import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RetService {

  constructor(private http: HttpClient) { }
  res = 'assets/json/oneday.json';
  getData(): Observable<any> {
    return this.http.get(this.res);
  }
}
