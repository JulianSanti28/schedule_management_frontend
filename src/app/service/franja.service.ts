import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Franja} from '../model/Franja';
import { HorarioDocente } from '../model/HorarioDocente';
import {Horario} from '../model/Horario';
@Injectable({
  providedIn: 'root'
})
export class FranjaService {
  constructor(private http: HttpClient) { }
  urlPath = 'http://localhost:8083/schedule/franjahoraria/';
  urlUpdate = 'http://localhost:8083/schedule/franjahoraria/update';
  urlFindAll = 'http://localhost:8083/schedule/franjahoraria/all';
  urlHorario = this.urlPath + 'horario/';
  urlDelete = this.urlPath +'delete';
  urlSave = this.urlPath + 'create';

  createFranja(franja: Franja) {
    console.log(franja);
    return this.http.post<Franja>(this.urlSave, franja);
  }
  getFranjas() {
    return this.http.get<Franja[]>(this.urlFindAll);
  }
  getFranja(id: number) {
    return this.http.get<Franja>(this.urlPath + id);
  }
  updateFranja(franja: Franja) {
    return this.http.put<Franja>(this.urlUpdate, franja);
  }
  removeFranja(id: number) {
    return this.http.delete<Franja>(this.urlDelete + '/'+id);
  }

  getHorarioDocente(horario: HorarioDocente) {
    return this.http.get<Horario[]>(this.urlHorario +horario.id + '/'+horario.periodo);
  }

}
