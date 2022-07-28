import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Periodo} from '../model/Periodo';
import {Competencia} from '../model/Competencia';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {
  constructor(private http: HttpClient) {}
  urlPath = 'http://localhost:8083/schedule/periodoacademico/';
  urlSave =  this.urlPath + 'create';
  urlFindAll = this.urlPath + 'all';
  urlUpdate = this.urlPath + 'update';
  urlCompetences = 'http://localhost:8083/schedule/competencia/';

  createPeriodo(periodo: Periodo) {
    return this.http.post<Periodo>(this.urlSave, periodo);
  }
  getPeriodos() {
    return this.http.get<Periodo[]>(this.urlFindAll);
  }
  getPeriodo(idPeriodo: number) {
    return this.http.get<Periodo>(this.urlPath + idPeriodo);
  }
  updatePeriodo(periodo: Periodo) {
    return this.http.put<Periodo>(this.urlUpdate, periodo);
  }
  removePeriodo(idPeriodo: number) {
    return this.http.delete<Periodo>(this.urlPath + idPeriodo);
  }

  getCompetencias() {
    return this.http.get<Competencia[]>(this.urlCompetences + 'all');
  }

}

