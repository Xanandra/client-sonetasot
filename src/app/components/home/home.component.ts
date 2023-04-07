import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CampanaService } from 'src/app/service/campana.service';
import { DataService } from 'src/app/service/data.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  
  curp: string = ''
  expCurp: string = '/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/';

  campanas: Array<any> = []

  mostrar: boolean = true;
  
  personas = [
    {edad: "18 y más", img: "./assets/image/per-18.png"},
    {edad: "Adultos mayores", img: "./assets/image/per-may.png"},
    {edad: "12 a 17 años", img: "./assets/image/per-nin.png"},
    {edad: "embarazadas", img: "./assets/image/per-emb.png"},
  ];

  constructor(public campanasService:CampanaService, 
    public usuariosService:UsuarioService, 
    public router:Router, 
    public dataService:DataService) { }

  ngOnInit(): void {
    this.getCampanas();
  }

  getCampanas(){
    this.campanasService.getCampanas().subscribe((campana)=>{
      return this.campanas = campana
    })
  }

  // getUsuarios(){
  //   this._usuariosService.getUsuarios().subscribe((usuario)=>{
  //     return this.usuarios = usuario
  //   })
  // }

   getCurp(): void {
    console.log(this.curp)
    this.dataService.curpEvent$.emit(this.curp);
    this.mostrar = false;
    //Dar
    this.dataService.mostrarHEvent$.emit(this.mostrar);
   }
}
