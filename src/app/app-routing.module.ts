import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompleteComponent } from './components/complete/complete.component';
import { RegisterComponent } from './components/register/register.component';
import { MunicipioComponent } from './components/municipio/municipio.component';
import { DosisComponent } from './components/dosis/dosis.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'complete', component: CompleteComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'municipio', component: MunicipioComponent},
  {path: 'dosis', component: DosisComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
