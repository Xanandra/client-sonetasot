import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CampanaService } from 'src/app/service/campana.service';
import { DataService } from 'src/app/service/data.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  formUsers:FormGroup;

  public curpRC: string = '';
  public municRC: string = '';
  public campaIdRC: number = 0;
  public mostrarRC: boolean = false;
  public reg: string = 'reg-dis';
  public mostrarV: boolean = false;

  public existID:any;

  addResult: Array<any> = []
  campanas: Array<any> = []

  personas = [
   {edad: "18 y más", img: "./assets/image/per-18.png"},
   {edad: "Adultos mayores", img: "./assets/image/per-may.png"},
   {edad: "12 a 17 años", img: "./assets/image/per-nin.png"},
   {edad: "embarazadas", img: "./assets/image/per-emb.png"},
 ];

 constructor(
   public usuarioService:UsuarioService, 
   public router:Router,
   public activateRoute:ActivatedRoute,
   public formulario:FormBuilder) { 

     this.existID = this.activateRoute.snapshot.paramMap.get('id');
     console.log(this.existID);
     this.usuarioService.conUser(this.existID).subscribe(respuesta=>{
         console.log(respuesta);
         this.reg = 'reg-abl';

         this.formUsers.setValue({
           curp:respuesta[0]['curp'],
           nombre:respuesta[0]['nombre'],
           priApe:respuesta[0]['priApe'],
           segApe:respuesta[0]['segApe'],
           fecNac:respuesta[0]['fecNac'],
           edad:respuesta[0]['edad'],
           entNac:respuesta[0]['entNac'],
           sexo:respuesta[0]['sexo'],
           telCon1:respuesta[0]['telCon1'],
           telCon2:respuesta[0]['telCon2'],
           email:respuesta[0]['email'],
           calle:respuesta[0]['calle'],
           numExt:respuesta[0]['numExt'],
           numInt:respuesta[0]['numInt'],
           entFed:respuesta[0]['entFed'],
           codPos:respuesta[0]['codPos'],
           munic:respuesta[0]['munic'],
           colonia:respuesta[0]['colonia'],
           folio:respuesta[0]['folio'],
           fecCit:respuesta[0]['fecCit'],
           pNombre:respuesta[0]['pNombre'],
           pPriApe:respuesta[0]['pPriApe'],
           pSegApe:respuesta[0]['pSegApe'],
           camp_id:respuesta[0]['camp_id']
         })
       }
     );

     this.formUsers=this.formulario.group({
       curp: [''],
       nombre: ['', Validators.required],
       priApe: ['', Validators.required],
       segApe: ['', Validators.required],
       fecNac: ['', Validators.required],
       edad: ['', Validators.required],
       entNac: ['', Validators.required],
       sexo: ['', Validators.required],
       telCon1: ['', Validators.required],
       telCon2: ['', Validators.required],
       email: ['', Validators.required],
       calle: ['', Validators.required],
       numExt: ['', Validators.required],
       numInt: [''],
       entFed: ['', Validators.required],
       codPos: ['', Validators.required],
       munic: [''],
       colonia: [''],
       folio: ['', Validators.required],
       fecCit: [''],
       pNombre: [''],
       pPriApe: [''],
       pSegApe: [''],
       camp_id: ['']
     });

   }

 ngOnInit(): void {

  }
 
  actUser():any{
    console.log(this.existID);
    console.log(this.formUsers.value);
    this.usuarioService.actUser(this.existID,this.formUsers.value).subscribe(()=>{
      this.mostrarV = true;
      
    });
  }

 home():void{
   this.router.navigateByUrl('/');
 }
}
