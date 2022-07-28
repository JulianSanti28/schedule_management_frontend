import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ambiente } from '../model/Ambiente';

@Injectable({
  providedIn: 'root'
})
export class AmbienteService {

  constructor(private http: HttpClient) { }
  urlPath = 'http://localhost:8083/schedule/ambiente/';
  urlSave = this.urlPath + 'create';
  urlFindAll = this.urlPath + 'all';
  urlUpdate = this.urlPath + 'update';
  urlDelete = this.urlPath + 'delete/';

  createAmbiente(ambiente: Ambiente) {
    console.log(ambiente);
    return this.http.post<Ambiente>(this.urlSave, ambiente);
  }
  getAmbienteById(id: string){
    return this.http.get<Ambiente>(this.urlPath + id);
  }
  getAmbientes() {
    return this.http.get<Ambiente[]>(this.urlFindAll);
  }
  getAmbiente(idAmbiente: number) {
    return this.http.get<Ambiente>(this.urlPath + idAmbiente);
  }
  updateAmbiente(ambiente: Ambiente) {
    return this.http.put<Ambiente>(this.urlUpdate, ambiente);
  }
  removeAmbiente(idAmbiente: string) {
    return this.http.delete<Ambiente>(this.urlDelete + idAmbiente);
  }
}
