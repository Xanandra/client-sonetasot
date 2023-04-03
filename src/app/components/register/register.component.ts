import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
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

   addResult: Array<any> = []

  constructor(
    public dataService:DataService, 
    public usuarioService:UsuarioService, 
    private router:Router, 
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
        camp_id: [1]
      });
    }

  ngOnInit(): void {
     this.dataService.curpEvent$.subscribe(curpServ => {
      this.curpRC = curpServ;
      console.log(' CURP: ', curpServ);
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
