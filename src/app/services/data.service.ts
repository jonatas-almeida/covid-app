import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'https://covid19-brazil-api.now.sh/api/';

  constructor(private http: HttpClient) { }

  getAllData():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}report/v1`);
  }

  getEstadoData(estado:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/report/v1/brazil/uf/${estado}`);
  }
}
