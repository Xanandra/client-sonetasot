import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CampanaService } from 'src/app/service/campana.service';
import { DataService } from 'src/app/service/data.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formUsers:FormGroup;

   public curpRC: string = 'Registro!';
   public municRC: string = 'Registro!';
   public campaIdRC: number = 2;

   addResult: Array<any> = []
   campanas: Array<any> = []

   personas = [
    {edad: "18 y más", img: "./assets/image/per-18.png"},
    {edad: "Adultos mayores", img: "./assets/image/per-may.png"},
    {edad: "12 a 17 años", img: "./assets/image/per-nin.png"},
    {edad: "embarazadas", img: "./assets/image/per-emb.png"},
  ];

  constructor(
    public dataService:DataService, 
    public usuarioService:UsuarioService, 
    public campanaService:CampanaService, 
    public formulario:FormBuilder) { 
      this.formUsers=this.formulario.group({
        curp: [''],
        nombre: [''],
        priApe: [''],
        segApe: [''],
        fecNac: [''],
        edad: [0],
        entNac: [''],
        sexo: [''],
        telCon1: [0],
        telCon2: [0],
        email: [''],
        calle: [''],
        numExt: [0],
        numInt: [''],
        entFed: [''],
        codPos: [0],
        munic: [''],
        colonia: [''],
        folio: [''],
        fecCit: [''],
        pNombre: [''],
        pPriApe: [''],
        pSegApe: [''],
        camp_id: [0]
      });
    }

  ngOnInit(): void {

     this.dataService.curpEvent$.subscribe(curpServ => {
      this.curpRC = curpServ;
      console.log(' CURP: ', curpServ);
     })

     this.dataService.municEvent$.subscribe(municServ => {
      this.municRC = municServ;
      console.log(' Municipio1: ', municServ);
     })

     this.dataService.campanaEvent$.subscribe(campaServ => {
      this.campaIdRC = campaServ;
      console.log(' Campaña5: ', campaServ);
     })

     this.getCampanas();
    }
  
    getCampanas(){
      this.campanaService.getCampanas().subscribe((campana)=>{
        return this.campanas = campana
      })
    }

  addUser():any {
    this.formUsers.value.curp = this.curpRC;
    console.log(this.formUsers.value);

    this.usuarioService.addUser(this.formUsers.value).subscribe((result)=>{
      console.log(result);
      return this.addResult = result
    });
    
  }

}
