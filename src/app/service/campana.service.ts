import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Campana } from './campana';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampanaService {

  URL = "http://localhost/server/campanas.php";

  constructor(private _http:HttpClient) { }

  getCampanas(): Observable<Campana[]> {
    return this._http.get<Campana[]>(this.URL);
  }
}
