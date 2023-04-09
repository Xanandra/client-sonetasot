import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['./cancelar.component.css']
})
export class CancelarComponent implements OnInit {

  public curp: string = '';
  public id: number = 0;
  public mostrarNC: boolean = false;
  public mostrarV1: string = "vent-abl";
  public mostrarV2: string = "vent-dis";

  constructor(public dataService:DataService,
    public usuarioService:UsuarioService,
    public router:Router) { }

  ngOnInit(): void {

    this.getData();

    //  Recibir
    this.dataService.mostrarCEvent$.subscribe(mostrarServ => {
      this.mostrarNC = mostrarServ;
      })
    
  }

  getData():void{
    this.dataService.curpCCEvent$.subscribe(curpServ => {
      this.curp = curpServ;
      console.log(' CURP Register: ', this.curp);
    });
  
    this.dataService.idCCEvent$.subscribe(idServ => {
      this.id = idServ;
      console.log(' Id Register: ', this.id);
    });
  }

  eliRegis(){
    console.log(this.curp);
    console.log(this.id);
    this.usuarioService.delUser(this.id).subscribe((result)=>{
      console.log(result);
    });
    this.mostrarV1 = "vent-dis";
    this.mostrarV2 = "vent-abl";
  }

  cerrar():void{
    this.mostrarNC = false;
  }

  home():void{
    this.router.navigateByUrl('/');
  }
}
