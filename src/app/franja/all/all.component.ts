import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Franja } from 'src/app/model/Franja'
import { FranjaService } from 'src/app/service/franja.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllFranjaComponent implements OnInit {

  franjas?: Franja[];
  constructor(private router: Router, private service: FranjaService) { }

  ngOnInit(): void {
    this.loadFranjas();
  }

  loadFranjas() {
    this.service.getFranjas()
      .subscribe(data => {
        this.franjas = data;
        console.log(this.franjas);
      })
  }

  editar(franja: Franja) {
    localStorage.setItem("franjaId", franja.idHorario!.toString());
    this.router.navigate(["franja/update"]);
  }
  eliminar(franja: Franja) {
    alert("Esta seguro que desea eliminar la franja: " + franja.idHorario);
    this.service.removeFranja(franja.idHorario!)
      .subscribe(data => {
        alert(data.message);
        this.loadFranjas();
      })
    
  }
  crearFranja(){
    this.router.navigate(["franja/create"]);
  }

}
