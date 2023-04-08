import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  curpEvent$ = new EventEmitter<string>();
  curpCCEvent$ = new EventEmitter<string>();
  municEvent$ = new EventEmitter<string>();
  campanaEvent$ = new EventEmitter<number>();
  mostrarHEvent$ = new EventEmitter<boolean>();
  mostrarMEvent$ = new EventEmitter<boolean>();
  mostrarDEvent$ = new EventEmitter<boolean>();
  mostrarAEvent$ = new EventEmitter<boolean>();
  mostrarREvent$ = new EventEmitter<boolean>();

  constructor() { }



}
