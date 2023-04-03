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

  campanas: Array<any> = []
  

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
    //this.router.navigate(['/register'])
   }


}
