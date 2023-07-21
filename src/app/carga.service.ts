import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CargaService {

  machineData = 'AQUI VA LA UBICACION DEL CSV'
  constructor(private http: HttpClient) { }

  getInfo(){
    return this.http.get(this.machineData,{responseType: 'text'});
  }
}
