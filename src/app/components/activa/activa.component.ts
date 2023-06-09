import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { CampanaService } from 'src/app/service/campana.service';

@Component({
  selector: 'app-activa',
  templateUrl: './activa.component.html',
  styleUrls: ['./activa.component.css']
})
export class ActivaComponent implements OnInit {

  public municDC: string = 'Registro!';
  public ver: string = 'div-dis';
  public campaIdDC: number = 0;
  public campanasId: number = 0;
  public mostrarDC: boolean = true;
  public mostrarAC: boolean = false;
  public mostrarRC: boolean = true;

  campanas: Array<any> = []
    
  personas = [
    {edad: "18 y más", img: "./assets/image/per-18.png"},
    {edad: "Adultos mayores", img: "./assets/image/per-may.png"},
    {edad: "12 a 17 años", img: "./assets/image/per-nin.png"},
    {edad: "embarazadas", img: "./assets/image/per-emb.png"},
  ];

  constructor(public dataService:DataService,
    public campanasService:CampanaService) { }

  ngOnInit(): void {
    this.getCampanas();
    
    this.dataService.municEvent$.subscribe(municServ => {
      this.municDC = municServ;
      console.log(' Municipio3: ', municServ);
     })
    
    this.dataService.campanaEvent$.subscribe(campServ => {
      this.campaIdDC = campServ;
      console.log(' Campaña1: ', campServ);
     })
    //  Recibir
    this.dataService.mostrarDEvent$.subscribe(mostrarServ => {
      this.mostrarAC = mostrarServ;
     })
  }

  getCampanas(){
    this.campanasService.getCampanas().subscribe((campana)=>{
      return this.campanas = campana
    })
  }
  
  getCampaId(cId: number): void {
    this.campanasId = cId;
    console.log("Campaña2:" + this.campanasId)
   }

  getCampa(): void {
    if (this.campanasId != 0) {
      this.dataService.campanaEvent$.emit(this.campanasId);
      console.log("Campaña3:" + this.campanasId)
      this.mostrarAC = false;
      //  Dar
      this.dataService.mostrarAEvent$.emit(this.mostrarRC);
    }
    else{
      this.ver = "div-abl";
    }
   }

   regresar():void{
    this.mostrarAC = false;
    this.mostrarRC = false;
    console.log(this.mostrarDC)
    //  Dar
    this.dataService.mostrarBDEvent$.emit(this.mostrarDC);
   }

}
