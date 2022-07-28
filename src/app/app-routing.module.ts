import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './user/create/create.component';
import { LoginComponent } from './user/login/login.component';
import {UpdateComponent} from './periodo/update/update.component';
import {AllComponent} from './periodo/all/all.component';
import {PeriodoCreateComponent} from './periodo/create/create.component';
import {CreateAmbienteComponent} from './ambiete/create-ambiente/create-ambiente.component';
import {UpdateAmbienteComponent} from './ambiete/update-ambiente/update-ambiente.component';
import {AllAmbienteComponent} from './ambiete/all-ambiente/all-ambiente.component';
import {CreateFranjaComponent} from './franja/create-franja/create-franja.component';
import {UpdateFranjaComponent} from './franja/update-franja/update-franja.component';
import {HorarioDocenteComponent} from './franja/horario-docente/horario-docente.component';
import {AllFranjaComponent} from './franja/all/all.component';



const routes: Routes = [
  {path:'register', component: CreateComponent},
  {path:'login', component: LoginComponent},
  {path:'periodo/update', component: UpdateComponent},
  {path:'periodo/all', component: AllComponent},
  {path:'periodo/create', component: PeriodoCreateComponent},
  {path:'ambiente/create', component: CreateAmbienteComponent},
  {path:'ambiente/update', component: UpdateAmbienteComponent},
  {path:'ambiente/all', component: AllAmbienteComponent},
  {path:'franja/create', component: CreateFranjaComponent},
  {path:'franja/update', component: UpdateFranjaComponent},
  {path:'docente/horario', component: HorarioDocenteComponent},
  {path:'franja/all', component: AllFranjaComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
