import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ambiente } from 'src/app/model/Ambiente'
import { AmbienteService } from 'src/app/service/ambiente.service';

@Component({
  selector: 'app-all-ambiente',
  templateUrl: './all-ambiente.component.html',
  styleUrls: ['./all-ambiente.component.css']
})
export class AllAmbienteComponent implements OnInit {

  ambientes?: Ambiente[];
  constructor(private router: Router, private service: AmbienteService) { }

  ngOnInit(): void {
    this.loadAmbientes();
  }

  loadAmbientes() {
    this.service.getAmbientes()
      .subscribe(data => {
        this.ambientes = data;
        console.log(data);
      })
  }

  editar(ambiente: Ambiente) {
    localStorage.setItem("ambienteId", ambiente.codigo);
    this.router.navigate(["ambiente/update"]);
  }
  eliminar(ambiente: Ambiente) {
    alert("Esta seguro que desea eliminar el ambiente: " + ambiente.codigo);
    this.service.removeAmbiente(ambiente.codigo)
      .subscribe(data => {
        console.log(data);
        if (data.codigo != null) {
          alert("Ambiente eliminado correctamente");
          this.loadAmbientes();
        }else{
          alert("Error al eliminar el ambiente");
        }
        this.loadAmbientes();
      })
    
  }
  crearAmbiente(){
    this.router.navigate(["ambiente/create"]);
  }

}
