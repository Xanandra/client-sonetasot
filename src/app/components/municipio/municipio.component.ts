import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.css']
})
export class MunicipioComponent implements OnInit {

  public municMC: string = '';
  public mostrarMC: boolean = true;
  public mostrarDC: boolean = true;
  public mostrarHC: boolean = true;

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    //Recibir
    this.dataService.mostrarHEvent$.subscribe(mostrarServ => {
      this.mostrarMC = mostrarServ;
     })
     //  Recibir
    this.dataService.mostrarBMEvent$.subscribe(mostrarServ => {
      this.mostrarMC = mostrarServ;
     })
  }

  getMunic(): void {
    console.log(this.municMC)
    this.dataService.municEvent$.emit(this.municMC);
    this.mostrarMC = true;
    this.mostrarDC = true;
    //Dar
    this.dataService.mostrarMEvent$.emit(this.mostrarDC);
   }

   regresar():void{
    this.mostrarMC = true;
    this.mostrarDC = false;
    //  Dar
    this.dataService.mostrarBHEvent$.emit(this.mostrarHC);
   }

}
