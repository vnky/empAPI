import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl : string;
  constructor(private _http: HttpClient) { 
      this.baseUrl = 'http://localhost:3000'
  }
  
  getEmpData (apiUrl) {
    return this._http.get(`${this.baseUrl}/${apiUrl}`);
  }
}
