import { Component, OnInit } from '@angular/core';
import { Periodo } from '../../model/Periodo';
import { Router } from '@angular/router';
import { PeriodoService } from '../../service/periodo.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  periodos?: Periodo[];
  rol?: string;
  username?: string;
  constructor(private router: Router, private service: PeriodoService) {
  }

  ngOnInit(): void {
    this.rol = localStorage.getItem('rol')!;
    this.username = localStorage.getItem('username')!;
    this.service.getPeriodos()
      .subscribe(data => {
        console.log(data);
        this.periodos = data;
      })
  }

  editar(id: number){
    localStorage.setItem('idPeriodo', id.toString());
    this.router.navigate(['periodo/update']);
  }
  eliminar(idPeriodo: number){
    alert('Esta seguro que desea eliminar el periodo?');
    this.service.removePeriodo(idPeriodo)
      .subscribe(data => {
        alert('Periodo eliminado correctamente');
        this.ngOnInit();
      }
      )
  }
  crearPeriodo(){
    this.router.navigate(['periodo/create']);
  }
}
