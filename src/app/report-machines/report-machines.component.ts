import { Component, OnInit } from '@angular/core';
import { CargaService } from '../carga.service';

@Component({
  selector: 'app-report-machines',
  templateUrl: './report-machines.component.html',
  styleUrls: ['./report-machines.component.scss']
})
export class ReportMachinesComponent implements OnInit {
  
machineData: any =[];

  constructor(private cargaService: CargaService){}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.cargaService.getInfo().subscribe(data =>{
      const list = data.split('\n');
      list.forEach(e =>{
        this.machineData.push(e);
      })
    })
  }
}
