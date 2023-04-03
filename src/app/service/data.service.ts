import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  curpEvent$ = new EventEmitter<string>();

  constructor() { }



}
