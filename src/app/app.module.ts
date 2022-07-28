import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { CreateComponent } from './user/create/create.component';
import {PeriodoCreateComponent} from './periodo/create/create.component';
import { LoginComponent } from './user/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UpdateComponent } from './periodo/update/update.component';
import { AllComponent } from './periodo/all/all.component';
import { CreateAmbienteComponent } from './ambiete/create-ambiente/create-ambiente.component';
import { UpdateAmbienteComponent } from './ambiete/update-ambiente/update-ambiente.component';
import { AllAmbienteComponent } from './ambiete/all-ambiente/all-ambiente.component';
import { CreateFranjaComponent } from './franja/create-franja/create-franja.component';
import { UpdateFranjaComponent } from './franja/update-franja/update-franja.component';
import { HorarioDocenteComponent } from './franja/horario-docente/horario-docente.component';
import { AllFranjaComponent } from './franja/all/all.component';

@NgModule({
  declarations: [
    PeriodoCreateComponent,AppComponent, CreateComponent, LoginComponent, UpdateComponent, AllComponent, CreateAmbienteComponent, UpdateAmbienteComponent, AllAmbienteComponent, CreateFranjaComponent, UpdateFranjaComponent, HorarioDocenteComponent,    
    AllFranjaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
  ],
  //Indica cómo se levanta nuestra app
  bootstrap: [AppComponent]
})
export class AppModule { }
