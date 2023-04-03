import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { CampanaService } from 'src/app/service/campana.service';

@Component({
  selector: 'app-dosis',
  templateUrl: './dosis.component.html',
  styleUrls: ['./dosis.component.css']
})
export class DosisComponent implements OnInit {

  public municDC: string = 'Registro!';
  campanas: Array<any> = []

  constructor(public usuarioService:UsuarioService, 
    public dataService:DataService,
    public campanasService:CampanaService) { }

  ngOnInit(): void {

    this.getCampanas();

    this.dataService.municEvent$.subscribe(municServ => {
      this.municDC = municServ;
      console.log(' Municipio: ', municServ);
     })
  }

  getCampanas(){
    this.campanasService.getCampanas().subscribe((campana)=>{
      return this.campanas = campana
    })
  }

}
