import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CampanaService } from 'src/app/service/campana.service';
import { DataService } from 'src/app/service/data.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formUsers:FormGroup;

   public curpRC: string = '';
   public municRC: string = '';
   public campaIdRC: number = 0;
   public mostrarRC: boolean = false;
   public reg: string = 'reg-dis';

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
    public router:Router,
    public formulario:FormBuilder) { 
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

     this.dataService.curpEvent$.subscribe(curpServ => {
      this.curpRC = curpServ;
      console.log(' CURP Register: ', curpServ);
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
    //  Recibir
    this.dataService.mostrarAEvent$.subscribe(mostrarServ => {
      this.mostrarRC = mostrarServ;
      if(this.mostrarRC){
        this.reg = 'reg-abl';
      }
     })
    }
  
    getCampanas(){
      this.campanaService.getCampanas().subscribe((campana)=>{
        return this.campanas = campana
      })
    }

  addUser():any {
    this.formUsers.value.curp = this.curpRC;
    this.formUsers.value.munic = this.municRC;
    this.formUsers.value.camp_id = this.campaIdRC;
    console.log(this.formUsers.value);

    this.usuarioService.addUser(this.formUsers.value).subscribe((result)=>{
      console.log(result);
      return this.addResult = result
    });

    this.router.navigateByUrl('/complete');
  }
}
