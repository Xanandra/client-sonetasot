import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { CampanaService } from 'src/app/service/campana.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {

  public curp: string = '';
  public id: number = 0;
  public mostrarNC: boolean = true;

  Usuarios: Array<any> = []
  campanas: Array<any> = []

  personas = [
    {edad: "18 y más", img: "./assets/image/per-18.png"},
    {edad: "Adultos mayores", img: "./assets/image/per-may.png"},
    {edad: "12 a 17 años", img: "./assets/image/per-nin.png"},
    {edad: "embarazadas", img: "./assets/image/per-emb.png"},
  ];

  constructor(public usuariosService:UsuarioService, 
    public campanaService:CampanaService, 
    public dataService:DataService) { }

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

  cancelCit():void{  
    this.Usuarios.forEach((usuario)=>{
      this.curp = usuario.curp;
      this.id = usuario.id;
    })
    this.dataService.curpCCEvent$.emit(this.curp);
    this.dataService.idCCEvent$.emit(this.id);
    console.log("CURP Complete:",this.curp) 
    //  Dar
    this.dataService.mostrarCEvent$.emit(this.mostrarNC);
  }
}
