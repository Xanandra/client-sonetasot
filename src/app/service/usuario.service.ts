import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL = "http://localhost/server/usuarios.php/";

  constructor(private _http:HttpClient) { }

  getUser(): Observable<Usuario[]>{
    return this._http.get<Usuario[]>(this.URL)
  }

  addUser(usersData:Usuario):Observable<any>{
      return this._http.post(this.URL+"?insertar=1", usersData)
    }
}
