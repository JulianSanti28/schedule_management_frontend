import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeriodoService } from '../../service/periodo.service';
import { Periodo } from '../../model/Periodo';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class PeriodoCreateComponent implements OnInit {
  public createForm!: FormGroup;
  constructor(private service: PeriodoService, private router: Router) {
    this.createForm = this.createFormGroup();
  }

  ngOnInit(): void {

  }

  periodo: Periodo = new Periodo();
  esCorrectaFecha: boolean = false;

  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
      fechaInicio: new FormControl('', [Validators.required, Validators.minLength(4)]),
      fechaFin: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(16)]),
    });
  }
  validarRangoFechas() {
    let initialDate = new Date(this.periodo.fechaInicio!);
    let finalDate = new Date(this.periodo.fechaFin!);
    if (initialDate.getFullYear() == finalDate.getFullYear()) {
      console.log("Inicio");
      if ((initialDate.getDate() + 1) == (finalDate.getDate() + 1)) {
        if ((finalDate.getMonth() + 1) - (initialDate.getMonth() + 1) == 3 || (finalDate.getMonth() + 1) - (initialDate.getMonth() + 1) == 6) {
          this.esCorrectaFecha = true;
        } else {
          console.log("False");
          this.esCorrectaFecha = false;
        }
      } else {
        this.esCorrectaFecha = false;
      }
    } else {
      if (finalDate.getFullYear() > initialDate.getFullYear() && (initialDate.getDate() + 1) == (finalDate.getDate() + 1) && ((((12 - (initialDate.getMonth() + 1)) + (finalDate.getMonth() + 1)) == 3) || ((12 - (initialDate.getMonth() + 1)) + (finalDate.getMonth() + 1)) == 6)) {
        this.esCorrectaFecha = true;
      }
      else {
        this.esCorrectaFecha = false; //Fecha de inicio mayor a la fecha de fin
      }
    }

  }
  guardarPeriodo() {
    if (this.createForm.valid && this.periodo.fechaInicio! < this.periodo.fechaFin! && this.esCorrectaFecha) {
      this.service.createPeriodo(this.periodo).subscribe(
        (data) => {
          this.periodo = data;
          if (this.periodo.id > 0) {
            alert("Periodo creado correctamente");
            this.router.navigate(['/periodo/all']);
          } else {
            alert('Error al crear el periodo');
          }
        }
      );
    } else {
      if (this.periodo.fechaInicio! > this.periodo.fechaFin!) {
        alert("La fecha de inicio no puede ser mayor a la fecha de fin");
      } else {
        alert("Campos inválidos");
      }
    }
  }

  get nombre() { return this.createForm.get('nombre'); }
  get fechaInicio() { return this.createForm.get('fechaInicio'); }
  get fechaFin() { return this.createForm.get('fechaFin'); }

}
