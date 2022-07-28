import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AmbienteService } from 'src/app/service/ambiente.service';
import { Ambiente } from 'src/app/model/Ambiente';

@Component({
  selector: 'app-create-ambiente',
  templateUrl: './create-ambiente.component.html',
  styleUrls: ['./create-ambiente.component.css']
})
export class CreateAmbienteComponent implements OnInit {
  public createForm!: FormGroup;
  constructor(private service: AmbienteService, private router: Router) {
    this.createForm = this.createFormGroup();
  }

  ngOnInit(): void {
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
  guardarAmbiente() {
    if (this.createForm.valid) {
      this.service.createAmbiente(this.ambienteObj).subscribe(
        (data) => {
          if(data.codigo != null){
            alert("Ambiente creado correctamente");
            this.router.navigate(['/ambiente/all']);
          }else{
            alert("Error al crear ambiente");
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
