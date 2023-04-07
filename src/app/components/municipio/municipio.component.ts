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

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
    //Recibir
    this.dataService.mostrarHEvent$.subscribe(mostrarServ => {
      this.mostrarMC = mostrarServ;
      console.log(' Municipio2: ', mostrarServ);
     })
  }

  getMunic(): void {
    console.log(this.municMC)
    this.dataService.municEvent$.emit(this.municMC);
    //this.router.navigate(['/register'])
    this.mostrarMC = true;
    //Dar
    this.dataService.mostrarMEvent$.emit(this.mostrarDC);
   }

}
