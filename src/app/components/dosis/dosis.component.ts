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
  public campanasId: number = 0;
  public mostrarMC: boolean = false;
  public mostrarDC: boolean = false;
  public mostrarAC: boolean = true;

  campanas: Array<any> = []

  constructor(public usuarioService:UsuarioService, 
    public dataService:DataService,
    public campanasService:CampanaService) { }

  ngOnInit(): void {

    this.getCampanas();

    this.dataService.municEvent$.subscribe(municServ => {
      this.municDC = municServ;
      console.log(' Municipio2: ', municServ);
     })
     
    // Recibir
    this.dataService.mostrarMEvent$.subscribe(mostrarServ => {
      this.mostrarDC = mostrarServ;
    })

    //  Recibir
    this.dataService.mostrarBDEvent$.subscribe(mostrarServ => {
      this.mostrarDC = mostrarServ;
      console.log("Mostrar Dosis",this.mostrarDC)
     })
  }

  getCampanas(){
    this.campanasService.getCampanas().subscribe((campana)=>{
      return this.campanas = campana
    })
  }

  getCampaId(cId: number): void {
    this.campanasId = cId;
    console.log("Campaña:", this.campanasId)
   }

  getCampa(): void {
    this.dataService.campanaEvent$.emit(this.campanasId);
    console.log("Campaña:", this.campanasId)
    this.mostrarDC = false;
    this.mostrarAC = true;
    //  Dar
    this.dataService.mostrarDEvent$.emit(this.mostrarAC);
   }

   regresar():void{
    this.mostrarDC = false;
    this.mostrarAC = false;
    console.log(this.mostrarDC)
    //  Dar
    this.dataService.mostrarBMEvent$.emit(this.mostrarMC);
   }
}
