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
  selector: 'app-update-franja',
  templateUrl: './update-franja.component.html',
  styleUrls: ['./update-franja.component.css']
})
export class UpdateFranjaComponent implements OnInit {

  public createForm!: FormGroup;

  //Elementos trados de la base de datos

  ambientes?: Ambiente[];
  periodos?: Periodo[];
  competencias?: Competencia[];
  docentes?: Docente[];

  constructor(private router: Router,private franjaService: FranjaService, private periodoService: PeriodoService, private ambienteService: AmbienteService, private userService: UserServiceService) {
    this.createForm = this.createFormGroup();
  }

  ngOnInit(): void {
    this.obtenerPeriodos();
    this.obtenerAmbientes();
    this.obtenerDocentes(); 
    this.obtenerCompetencias();
    this.franjaService.getFranja(+localStorage.getItem('franjaId')!).subscribe(
      (data) => {
        
        this.franja = data;
        console.log(this.franja);
        //this.franja.idDocente = data.idDocente?.id;
      });
  }

  franja: Franja = new Franja();
  createFormGroup() {
    return new FormGroup({
      horaInicio: new FormControl('', [Validators.required]),
      horaFinal: new FormControl('', [Validators.required]),
      dia: new FormControl('', [Validators.required, Validators.min(4), Validators.max(7)]),
      periodoAcademico: new FormControl('', [Validators.required, Validators.min(5)]),
      ambienteAcademico: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(5)]),
      competenciaAcademico: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(5)]),
      docente: new FormControl('', [Validators.required]),
    });
  }

  async obtenerCompetencias() {
    this.periodoService.getCompetencias()
    .subscribe(data => {
      this.competencias = data;
    })
  }
  
  guardarFranja(){

    this.franjaService.updateFranja(this.franja).subscribe(
      (data) => {
        console.log(data);
        if(data.idHorario!=null){
          alert("Franja actualizada correctamente");
        }else{
          alert("Error al actualizar la franja");
        }
        this.router.navigate(['franja/all']);
      }
    )
  }
  async obtenerAmbientes(){
    this.ambienteService.getAmbientes()
    .subscribe(data => {
      this.ambientes = data;
    })
  }
 async obtenerPeriodos() {
    this.periodoService.getPeriodos()
    .subscribe(data => {
      this.periodos = data;
    })
  }

 async obtenerDocentes(){
    this.userService.obtenerDocentes()
    .subscribe(data => {
      //console.log(data);
      this.docentes = data;
    })
  }

  get horaInicio() { return this.createForm.get('horaInicio'); }
  get horaFinal() { return this.createForm.get('horaFinal'); }
  get dia() { return this.createForm.get('dia'); }
  get periodoAcademico() { return this.createForm.get('periodoAcademico'); }
  get ambienteAcademico() { return this.createForm.get('ambienteAcademico'); }
  get competenciaAcademico() { return this.createForm.get('competenciaAcademico'); }
  get docente() { return this.createForm.get('docente'); }
}
