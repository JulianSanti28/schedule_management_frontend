import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Periodo } from 'src/app/model/Periodo';
import { PeriodoService } from '../../service/periodo.service';
import { FranjaService } from 'src/app/service/franja.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HorarioDocente } from 'src/app/model/HorarioDocente';
import { Horario } from 'src/app/model/Horario';


@Component({
  selector: 'app-horario-docente',
  templateUrl: './horario-docente.component.html',
  styleUrls: ['./horario-docente.component.css']
})
export class HorarioDocenteComponent implements OnInit {

  //Dictionary para almacenar los periodos
  numeroDia?: number;
  contador: number = 0;

  iniciarContador(){
    this.contador = 0;
  }

  incrementarContador(){
    this.contador++;
  }

  validarNumeroDia(dia:string){
    
    if(dia == 'lunes'){
      this.numeroDia = 1;
    }
    if(dia == 'martes'){
      this.numeroDia = 2;
    }
    if(this.removeAccents(dia) == 'miercoles'){
      this.numeroDia = 3;
    }
    if(dia == 'jueves'){
      this.numeroDia = 4;
    }
    if(dia == 'viernes'){
      this.numeroDia = 5;
    }
    if(this.removeAccents(dia) == 'sabado'){
      
      this.numeroDia = 6;
    }

  }

  removeAccents = (str:String) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  } 

  periodos?: Periodo[];
  public createForm!: FormGroup;
  horarioDocente: HorarioDocente = new HorarioDocente();
  horariosPeriodoDocente?: Horario[];
  constructor(private router: Router, private periodoService: PeriodoService, private franjaService: FranjaService) { }

  ngOnInit(): void {
    this.obtenerPeriodos();
    this.createForm = this.createFormGroup();
  }

  createFormGroup() {
    return new FormGroup({
      periodo: new FormControl('', [Validators.required]),
    });
  }
  async obtenerPeriodos() {
    this.periodoService.getPeriodos()
      .subscribe(data => {
        this.periodos = data;
      })
  }
  consultarHorario() {
    this.horarioDocente.periodo = this.periodo!.value;
    this.horarioDocente.id = localStorage.getItem('id')!;
    console.log(this.horarioDocente);
    this.franjaService.getHorarioDocente(this.horarioDocente)
      .subscribe(data => {
        this.horariosPeriodoDocente = data;
        console.log(this.horariosPeriodoDocente);

      }
      )
  }

  get periodo() { return this.createForm.get('periodo'); }

}
