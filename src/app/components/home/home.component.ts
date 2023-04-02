import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CampanaService } from 'src/app/service/campana.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // edades: FormControl = new FormControl('')
  // dosis: FormControl = new FormControl('')
  // marca: FormControl = new FormControl('')
  // dateDosis: FormControl = new FormControl('')
  // modulo: FormControl = new FormControl('')
  // domicilio: FormControl = new FormControl('')
  // municipio: FormControl = new FormControl('')
  campanas: Array<any> = []

  constructor(public _campanasService:CampanaService) { }

  ngOnInit(): void {
    this.getCampanas();
  }

  getCampanas(){
    this._campanasService.getCampanas().subscribe((campana)=>{
      return this.campanas = campana
    })
  }

  addUser(): void {
    // let curp = this.curp.value;
  }

}
