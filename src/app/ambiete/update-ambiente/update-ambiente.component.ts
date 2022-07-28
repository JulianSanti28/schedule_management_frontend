import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AmbienteService } from 'src/app/service/ambiente.service';
import { Ambiente } from 'src/app/model/Ambiente';

@Component({
  selector: 'app-update-ambiente',
  templateUrl: './update-ambiente.component.html',
  styleUrls: ['./update-ambiente.component.css']
})
export class UpdateAmbienteComponent implements OnInit {
  public createForm!: FormGroup;
  constructor(private service: AmbienteService, private router: Router) {
    this.createForm = this.createFormGroup();
    this.createForm.controls['id'].disable();
  }
  ngOnInit(): void {
    this.service.getAmbienteById(localStorage.getItem('ambienteId')!).subscribe(
      (data) => {
        
        this.ambienteObj = data;
      });
  }
  ambienteObj: Ambiente = new Ambiente();
  createFormGroup() {
    return new FormGroup({
      id: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
      tipoAmbiente: new FormControl('', [Validators.required]),
      capacidad: new FormControl('', [Validators.required, Validators.min(5)]),
      ubicacion: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(5)]),
    });
  }

  actualizarAmbiente() {
    if (this.createForm.valid) {
      this.service.updateAmbiente(this.ambienteObj).subscribe(
        (data) => {
          if (data.codigo != null) {
            alert("Ambiente actualizado correctamente");
            this.router.navigate(['/ambiente/all']);
          } else {
            alert("Error al actualizar ambiente");
          }
        }
      );
    }
  }

  get nombre() { return this.createForm.get('nombre'); }
  get tipoAmbiente() { return this.createForm.get('tipoAmbiente'); }
  get capacidad() { return this.createForm.get('capacidad'); }
  get ubicacion() { return this.createForm.get('ubicacion'); }
  get id() { return this.createForm.get('id'); }

}
