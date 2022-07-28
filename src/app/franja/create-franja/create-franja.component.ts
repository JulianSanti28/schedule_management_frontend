import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Franja } from '../../model/Franja';
import { Ambiente } from 'src/app/model/Ambiente';
import { Periodo } from 'src/app/model/Periodo';
import { AmbienteService } from '../../service/ambiente.service';
import { PeriodoService } from '../../service/periodo.service';
import { UserServiceService } from 'src/app/service/user-service.service';
import {Competencia} from '../../model/Competencia';
import {Docente} from '../../model/Docente';
import { FranjaService } from 'src/app/service/franja.service';

@Component({
  selector: 'app-create-franja',
  templateUrl: './create-franja.component.html',
  styleUrls: ['./create-franja.component.css']
})
export class CreateFranjaComponent implements OnInit {
  public createForm!: FormGroup;
  //Información de la franja
  franja: Franja = new Franja();
  //Elementos trados de la base de datos
  ambientes?: Ambiente[];
  periodos?: Periodo[];
  competencias?: Competencia[];
  docentes?: Docente[];
  //docentes?: Docente[];
  constructor(private router: Router,private franjaService: FranjaService, private periodoService: PeriodoService, private ambienteService: AmbienteService, private userService: UserServiceService) {
    this.createForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      horaInicio: new FormControl('', [Validators.required]),
      horaFinal: new FormControl('', [Validators.required]),
      dia: new FormControl('', [Validators.required]),
      periodoAcademico: new FormControl('', [Validators.required]),
      ambienteAcademico: new FormControl('', [Validators.required]),
      docenteAcademico: new FormControl('', [Validators.required]),
      competenciaAcademico: new FormControl('', [Validators.required]),
    });
  }

  guardarFranja() {
  
    this.franja.dia = this.createForm.get('dia')!.value;
    this.franja.horaInicio = this.createForm.get('horaInicio')!.value;
    this.franja.horaFin = this.createForm.get('horaFinal')!.value;
    this.franja.paId = this.createForm.get('periodoAcademico')!.value;
    this.franja.ambienteCod = this.createForm.get('ambienteAcademico')!.value;
    this.franja.idDocente = this.createForm.get('docenteAcademico')!.value;
    this.franja.codigoCompetencia = this.createForm.get('competenciaAcademico')!.value;
    //console.log(this.franja);
    if(this.franja.dia != null && this.franja.horaInicio != null && this.franja.horaFin != null && this.franja.paId != null && this.franja.ambienteCod != null && this.franja.idDocente != null && this.franja.codigoCompetencia != null){
      this.franjaService.createFranja(this.franja)
      .subscribe(data => {
       if(data.idHorario != null){
          alert("Franja creada correctamente");
         this.router.navigate(['franja/all']);
       }else{
          alert("Error al crear franja");
       }
      }, error => {
        console.log("Error al asignar la franja");
        console.log(error);
      }
      );
    }else{
      alert("Formulario inválido");
    }

  }

  ngOnInit(): void {
    this.obtenerPeriodos();
    this.obtenerAmbientes();
    this.obtenerDocentes(); 
    this.obtenerCompetencias();
  }
  async obtenerAmbientes(){
    this.ambienteService.getAmbientes()
    .subscribe(data => {
      this.ambientes = data;
    })
  }
  async obtenerDocentes(){
    this.userService.obtenerDocentes()
    .subscribe(data => {
      console.log(data);
      this.docentes = data;
    })
  }
  async obtenerPeriodos() {
    this.periodoService.getPeriodos()
    .subscribe(data => {
      this.periodos = data;
    })
  }

  async obtenerCompetencias() {
    this.periodoService.getCompetencias()

    .subscribe(data => {
      console.log(data);
      this.competencias = data;
    })
  }

  get horaInicio() { return this.createForm.get('horaInicio'); }
  get horaFinal() { return this.createForm.get('horaFinal'); }
  get dia() { return this.createForm.get('dia'); }
  get periodoAcademico() { return this.createForm.get('periodoAcademico'); }
  get ambienteAcademico() { return this.createForm.get('ambienteAcademico'); }
  get docenteAcademico() { return this.createForm.get('docenteAcademico'); }
  get competenciaAcademico() { return this.createForm.get('competenciaAcademico'); }



}
