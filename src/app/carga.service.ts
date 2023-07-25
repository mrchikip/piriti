import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CargaService {

  machineData = 'https://cks.com.co/filesTest/90.csv'
  // machineData = 'src/pdata/90.csv';

  constructor(private http: HttpClient) {}

  getInfo() {
    return this.http.get(this.machineData, { responseType: 'text' });
  }
}

// Access-Control-Allow-Origin: *