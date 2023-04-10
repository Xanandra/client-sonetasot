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
  
  public getId: number = 0;
  public getIdCurp: string = '';
  public curp: string = '';
  public vCurp: string = '([A-Z][AEIOUX][A-Z]{2}\\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\\d])(\\d)$';
  public mostrar: boolean = true;
  public mostrarHC: boolean = true;
  
  campanas: Array<any> = [];
  Usuarios: Array<any> = [];

  
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
    this.getUsuarios();
    //  Recibir
    this.dataService.mostrarBHEvent$.subscribe(mostrarServ => {
      this.mostrar = mostrarServ;
     })
  }

  getCampanas(){
    this.campanasService.getCampanas().subscribe((campana)=>{
      return this.campanas = campana
    })
  }

  getUsuarios(){
    this.usuariosService.getUser().subscribe((usuario)=>{
      console.log(usuario);
      return this.Usuarios = usuario;
    })
  }

  compCurp():void{
    this.Usuarios.forEach((usuario)=>{
      this.getId = usuario.id;
      console.log(this.getId);
      this.getIdCurp = usuario.curp;
      console.log(this.getIdCurp);
      if (this.getIdCurp == this.curp) {
        console.log("Ya existe");
        this.router.navigateByUrl('/actualizar/' + this.getId);
      }
      else{
        console.log("No existe");
      }
    })
  }

   getCurp(): void {

    this.compCurp();
    console.log("CURP Home: ",this.curp)
    this.dataService.curpEvent$.emit(this.curp);
    this.mostrar = false;
    //Dar
    this.dataService.mostrarHEvent$.emit(this.mostrar);
   }

   
}
