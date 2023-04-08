import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompleteComponent } from './components/complete/complete.component';
import { RegisterComponent } from './components/register/register.component';
import { MunicipioComponent } from './components/municipio/municipio.component';
import { DosisComponent } from './components/dosis/dosis.component';
import { CancelarComponent } from './components/cancelar/cancelar.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'complete', component: CompleteComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'municipio', component: MunicipioComponent},
  {path: 'dosis', component: DosisComponent},
  {path: 'cancelar', component: CancelarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
