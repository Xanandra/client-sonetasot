import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { CampanaService } from 'src/app/service/campana.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  flagCancel: boolean = false;

  Usuarios: Array<any> = []
  campanas: Array<any> = []

  personas = [
    {edad: "18 y más", img: "./assets/image/per-18.png"},
    {edad: "Adultos mayores", img: "./assets/image/per-may.png"},
    {edad: "12 a 17 años", img: "./assets/image/per-nin.png"},
    {edad: "embarazadas", img: "./assets/image/per-emb.png"},
  ];

  constructor(public usuariosService:UsuarioService, 
    public campanaService:CampanaService) { }

  ngOnInit(): void {
    
    this.getUsuarios();
    this.getCampanas();
  }

  getUsuarios(){
    this.usuariosService.getUser().subscribe((usuario)=>{
      console.log(usuario);
      return this.Usuarios = usuario;
    })
  }
    
  getCampanas(){
    this.campanaService.getCampanas().subscribe((campana)=>{
      return this.campanas = campana
    })
  }

  cancelCit(){
    this.flagCancel = true;
    
  }
}
