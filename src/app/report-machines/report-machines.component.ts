import { CargaService } from '../carga.service';
import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-report-machines',
  templateUrl: './report-machines.component.html',
  styleUrls: ['./report-machines.component.scss']
})
export class ReportMachinesComponent implements OnInit {
  machineData: string[] = [];

  constructor(private carga: CargaService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.carga.getInfo().pipe(
      catchError((error) => {
        console.error('Error al obtener los datos:', error);
        return of(null); // Devolver un observable con valor nulo para seguir con la ejecución
      })
    ).subscribe((data: any) => {
      if (data) {
        const list = data.split('\n');
        this.machineData.push.apply(this.machineData, list);
      }
    });
  }
}
