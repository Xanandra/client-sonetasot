import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public campanas: Array<any>;

  constructor() { 
    this.campanas = [
      {img:'#', edades:'18 y más', dosis:'Primera', marca:'', aplica:''},
      {img:'#', edades:'18 y más', dosis:'Segunda', marca:'Astra Zenéca', aplica:'15 de Agosto'}
    ]
  }

  ngOnInit(): void {
  }

}
