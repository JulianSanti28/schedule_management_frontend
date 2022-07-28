import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from './service/user-service.service';

@Component({
  //Tag HTML
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Atirbutos que se van a exportar y la página HTML de este
//Componente los usa
export class AppComponent{

  responseLogin: boolean = false;
  usuarioLogin?: string;
  rolLogin?: string = localStorage.getItem('rol')!;

  constructor(private router: Router, private userService: UserServiceService) {

    if(localStorage.getItem('ingreso') == "true"){
      console.log("ingreso");
      this.responseLogin = true;
      this.usuarioLogin = localStorage.getItem('username')!;
    }
    this.getResponseLogin();
    if(localStorage.getItem('token') == null){
      this.router.navigate(['login']);
    }  
  }
  /*Métodos*/
  getResponseLogin(){
    this.userService.getResponseLogin$().subscribe(data => {
      if(data.token != null){
        this.responseLogin = true;
        localStorage.setItem('ingreso', "true");
        this.rolLogin = data.rol;
        this.usuarioLogin = data.username;
      }
    })
  }
  horariosDocente(){
    this.router.navigate(['docente/horario']);
  }
  createUser() {
    this.router.navigate(['register']);
  }
  loginUser() {
    this.router.navigate(['login']);
  }
  asignarHorarios(){
    this.router.navigate(['franja/all']);
  }
  periodosAcademicos(){
    this.router.navigate(['periodo/all']);
  }
  ambientesAcademicos(){
    this.router.navigate(['ambiente/all']);
  }


  logoutUser() {  
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('username');
    localStorage.removeItem('ingreso');
    localStorage.removeItem('ambienteId')
    localStorage.removeItem('idPeriodo')
    localStorage.removeItem('idProducto')
    this.responseLogin = false;
    this.router.navigate(['login']);
  }

}
