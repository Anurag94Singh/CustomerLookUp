import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class SharedService {

  constructor(private http: HttpClient) { }

  getCountryStates(): Observable<any> {
    const url: string = 'assets/country-state-city.json';
    return this.http.get<any>(url);
  }

}