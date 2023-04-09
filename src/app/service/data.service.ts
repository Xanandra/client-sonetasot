import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  idCCEvent$ = new EventEmitter<number>();
  curpEvent$ = new EventEmitter<string>();
  curpCCEvent$ = new EventEmitter<string>();
  municEvent$ = new EventEmitter<string>();
  campanaEvent$ = new EventEmitter<number>();
  mostrarHEvent$ = new EventEmitter<boolean>();
  mostrarBHEvent$ = new EventEmitter<boolean>();
  mostrarMEvent$ = new EventEmitter<boolean>();
  mostrarBMEvent$ = new EventEmitter<boolean>();
  mostrarDEvent$ = new EventEmitter<boolean>();
  mostrarBDEvent$ = new EventEmitter<boolean>();
  mostrarAEvent$ = new EventEmitter<boolean>();
  mostrarREvent$ = new EventEmitter<boolean>();
  mostrarCEvent$ = new EventEmitter<boolean>();
  mostrarNEvent$ = new EventEmitter<boolean>();

  constructor() { }



}
