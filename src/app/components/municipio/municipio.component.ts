import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.css']
})
export class MunicipioComponent implements OnInit {

  municMC: string = '';

  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }

  getMunic(): void {
    console.log(this.municMC)
    this.dataService.municEvent$.emit(this.municMC);
    //this.router.navigate(['/register'])
   }

}
